import { createFromReadableStream } from "@vitejs/plugin-rsc/ssr";
import { renderToReadableStream as renderHTMLToReadableStream } from "react-dom/server.edge";
import {
  unstable_routeRSCServerRequest as routeRSCServerRequest,
  unstable_RSCStaticRouter as RSCStaticRouter,
} from "react-router";
import { SWRConfig } from "swr";
// import fbt, { IntlViewerContext, init } from "fbt";
// import intl from "translatedFbts.json";
// This will load the translated strings in FBT.
// init({ translations: intl });
// IntlViewerContext.locale = "vi_VN"; // or "en_US"
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
      const loadedData =
        Object.values(payload.type === "render" ? payload.loaderData : {})
          .filter(Boolean)
          .at(-1) || {};
      const formState =
        payload.type === "render" ? await payload.formState : undefined;
      const bootstrapScriptContent =
        await import.meta.viteRsc.loadBootstrapScriptContent("index");
      return await renderHTMLToReadableStream(
          <SWRConfig
            value={{
              revalidateOnMount: false,
              provider: () => new Map(),
              ...loadedData,
            }}
          >
            <RSCStaticRouter getPayload={getPayload} />
          </SWRConfig>,
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
