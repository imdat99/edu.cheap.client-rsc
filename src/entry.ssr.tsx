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
const app = new Hono();
app.use(cors(), etag(), contextStorage());
app.use(async (c, next) => {
  const fetchFunc = (request: Request) => (c as any).env.RSC.fetch(request)
  if (c.req.raw.url?.includes("/rpc/") ) {
    console.log("rpc request", c.req.raw.url);
    // return next();
    return fetchFunc(c.req.raw);
  }
  // return  Promise.resolve({
    // a: "b"
  // })
  return next();
  // const fetchFunc = (request: Request) => (c as any).env.RSC.fetch(request)
  // return await fetchFunc(c.req.raw);
});
app.use(async (c) => {
  const fetchFunc = (request: Request) => (c as any).env.RSC.fetch(request)
  return await routeRSCServerRequest({
    // The incoming request.
    request: c.req.raw,
    // How to call the React Server.
    fetchServer: fetchFunc,
    // Provide the React Server touchpoints.
    createFromReadableStream,
    // Render the router to HTML.
    async renderHTML(getPayload) {
      const payload = await getPayload();
      const formState =
        payload.type === "render" ? await payload.formState : undefined;
      const bootstrapScriptContent =
        await import.meta.viteRsc.loadBootstrapScriptContent("index");

      return await renderHTMLToReadableStream(
          <RSCStaticRouter getPayload={getPayload} />,
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