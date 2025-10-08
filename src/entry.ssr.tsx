import { createFromReadableStream } from "@vitejs/plugin-rsc/ssr";
import { renderToReadableStream as renderHTMLToReadableStream } from "react-dom/server.edge";
import { I18nextProvider } from "next-i18next";
import {
  RouterContextProvider,
  unstable_routeRSCServerRequest as routeRSCServerRequest,
  unstable_RSCStaticRouter as RSCStaticRouter,
} from "react-router";
import { SWRConfig } from "swr";
import { getInstance, i18nextMiddleware } from "Translation/server";
// import { LanguageDetector, type LanguageDetectorOption } from "remix-i18next/server";
// const app = new Hono();
// app.use(cors(), etag(), contextStorage());
// app.use(async (c, next) => {
//   const fetchFunc = (request: Request) => (c as any).env.RSC.fetch(request)
//   const url = c.req.raw.url || '';
//   if (url.includes("/rpc/") || url.includes("/_edu/") ) {
//     return fetchFunc(c.req.raw);
//   }
//   return next();
// });
// app.use(async (c) => {
//   const fetchFunc = (request: Request) => (c as any).env.RSC.fetch(request)

// })
export function generateHTML(
  request: Request,
  fetchServer: (request: Request) => Promise<Response>
) {
  return routeRSCServerRequest({
    // The incoming request.
    request,
    // How to call the React Server.
    fetchServer,
    // Provide the React Server touchpoints.
    createFromReadableStream,
    // Render the router to HTML.
    async renderHTML(getPayload) {
      const payload = await getPayload();
      const getContext = await new Promise<RouterContextProvider>((resolve) => {
        // biome-ignore lint/suspicious/noExplicitAny: <explanation>
        const routerContextProvider: any = {
          get: (key: string) => {
            // biome-ignore lint/suspicious/noExplicitAny: <explanation>
            return (routerContextProvider as any)[key];
          },
        };
        i18nextMiddleware(
          {
            request,
            context: {
              // biome-ignore lint/suspicious/noExplicitAny: <explanation>
              set: (key: string, value: any) => {
                Object.assign(routerContextProvider, {
                  [key]: value,
                });
              },
            } as RouterContextProvider,
            params: {},
          },
          (() => {
            resolve(routerContextProvider);
            // biome-ignore lint/suspicious/noExplicitAny: <explanation>
          }) as any
        );
      });
      // const routeKey = router.state.matches.at(-1)?.route.id || ''
      const loadedData =
        Object.values(payload.type === "render" ? payload.loaderData : {})
          .filter(Boolean)
          .at(-1) || {};
      const formState =
        payload.type === "render" ? await payload.formState : undefined;
      const bootstrapScriptContent =
        await import.meta.viteRsc.loadBootstrapScriptContent("index");
      return await renderHTMLToReadableStream(
        <I18nextProvider i18n={getInstance(getContext)}>
          <SWRConfig
            value={{
              revalidateOnMount: false,
              provider: () => new Map(),
              ...loadedData,
            }}
          >
            <RSCStaticRouter getPayload={getPayload} />
          </SWRConfig>
        </I18nextProvider>,
        {
          bootstrapScriptContent,
          // @ts-expect-error - no types for this yet
          formState,
        }
      );
    },
  });
}
// export default app;
// export default {
//   fetch(request: Request, env: any) {
//     return generateHTML(request, (request) => env.RSC.fetch(request))
//   },
// }
