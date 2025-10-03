import {
  createTemporaryReferenceSet,
  decodeAction,
  decodeFormState,
  decodeReply,
  loadServerAction,
  renderToReadableStream,
} from "@vitejs/plugin-rsc/rsc";
import { unstable_matchRSCServerRequest as matchRSCServerRequest } from "react-router";

import { routes } from "./routes/config";
import { rpcServer } from "./api/rpc";
import { Hono } from "hono";
import { contextStorage } from "hono/context-storage";
import { etag } from "hono/etag";
import { cors } from "hono/cors";

function fetchServer(request: Request) {
  return matchRSCServerRequest({
    // Provide the React Server touchpoints.
    createTemporaryReferenceSet,
    decodeAction,
    decodeFormState,
    decodeReply,
    loadServerAction,
    // The incoming request.
    request,
    // The app routes.
    routes: routes(),
    // Encode the match with the React Server implementation.
    generateResponse(match, options) {
      return new Response(renderToReadableStream(match.payload, options), {
        status: match.statusCode,
        headers: match.headers,
      });
    },
  });
}

// export default async function handler(request: Request) {
//   // Import the generateHTML function from the client environment
//   const ssr = await import.meta.viteRsc.loadModule<
//     typeof import("./entry.ssr")
//   >("ssr", "index");

//   return ssr.generateHTML(request, fetchServer);
// }
const app = new Hono();

// app.get("/", renderHome);
// app.use();
// console.log("rpcServer", );
app.use(cors(), etag(), contextStorage());
app.use(async (c) => {
  return await fetchServer(c.req.raw);
  // const ssr = await import.meta.viteRsc.loadModule<
  //   typeof import("./entry.ssr")
  // >("ssr", "index");

  // return ssr.generateHTML(c.req.raw, fetchServer);
})
app.all("/rpc/:path*", rpcServer);
export default app;
if (import.meta.hot) {
  import.meta.hot.accept();
}
