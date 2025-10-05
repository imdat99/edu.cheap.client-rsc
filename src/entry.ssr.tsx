import { createFromReadableStream } from "@vitejs/plugin-rsc/ssr";
import { renderToReadableStream as renderHTMLToReadableStream } from "react-dom/server.edge";
import { Hono } from "hono";
import { contextStorage } from "hono/context-storage";
import { cors } from "hono/cors";
import { etag } from "hono/etag";
import {
  unstable_routeRSCServerRequest as routeRSCServerRequest,
  unstable_RSCStaticRouter as RSCStaticRouter,
} from "react-router";
import { SWRConfig } from "swr";
const app = new Hono();
app.use(cors(), etag(), contextStorage());
app.use(async (c, next) => {
  const fetchFunc = (request: Request) => (c as any).env.RSC.fetch(request)
  if (c.req.raw.url?.includes("/rpc/") || c.req.raw.url?.includes("/_edu/") ) {
    console.log("rpc request", c.req.raw.url);
    return fetchFunc(c.req.raw);
  }
  return next();
});
app.use(async (c) => {
  const fetchFunc = (request: Request) => (c as any).env.RSC.fetch(request)
  return routeRSCServerRequest({
    // The incoming request.
    request: c.req.raw,
    // How to call the React Server.
    fetchServer: fetchFunc,
    // Provide the React Server touchpoints.
    createFromReadableStream,
    // Render the router to HTML.
    async renderHTML(getPayload) {
      const payload = await getPayload();
      // const routeKey = router.state.matches.at(-1)?.route.id || ''
      const loadedData = Object.values(payload.type === "render" ? payload.loaderData : {}).filter(Boolean).at(-1) || {};
      const formState = payload.type === "render" ? await payload.formState : undefined;
      const bootstrapScriptContent =
        await import.meta.viteRsc.loadBootstrapScriptContent("index");
      console.log("payload in renderHTML",  );
      return await renderHTMLToReadableStream(
         <SWRConfig value={{ revalidateOnMount: false, provider: () => new Map(), ...loadedData }}>
            <RSCStaticRouter getPayload={getPayload} />
          </SWRConfig>,
        {
          bootstrapScriptContent,
          // @ts-expect-error - no types for this yet
          formState,
        },
      );
    },
  });
})
export default app;
// export default {
//   fetch(request: Request, env: any) {
//     return generateHTML(request, (request) => env.RSC.fetch(request))
//   },
// }