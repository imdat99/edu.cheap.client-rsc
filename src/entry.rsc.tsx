import {
  createTemporaryReferenceSet,
  decodeAction,
  decodeFormState,
  decodeReply,
  loadServerAction,
  renderToReadableStream,
} from "@vitejs/plugin-rsc/rsc";
import { unstable_matchRSCServerRequest as matchRSCServerRequest } from "react-router";

import Tag from "Components/Server/Tag.server";
import { Hono } from "hono";
import { contextStorage } from "hono/context-storage";
import { cors } from "hono/cors";
import { routes } from "./routes/config";
import { rpcServer } from "api/rpc";
import {
  deleteCookie,
  getCookie,
  getSignedCookie,
  setCookie,
  setSignedCookie,
  generateCookie,
  generateSignedCookie,
} from 'hono/cookie'
// function fetchServer(request: Request) {
//   return matchRSCServerRequest({
//     // Provide the React Server touchpoints.
//     createTemporaryReferenceSet,
//     decodeAction,
//     decodeFormState,
//     decodeReply,
//     loadServerAction,
//     // The incoming request.
//     request,
//     // The app routes.
//     routes: routes(),
//     // Encode the match with the React Server implementation.
//     generateResponse(match, options) {
//       return new Response(renderToReadableStream(match.payload, options), {
//         status: match.statusCode,
//         headers: match.headers,
//       });
//     },
//   });
// }

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
app.use(cors(), contextStorage());

// app.all(".rsc/:path*", async (c, next) => {
// app.all("/rpc/:path*", rpcServer);

// });
app.all(async (c, next) => {
  console.log("c.req.raw.url", c.req.raw.url);

  if (c.req.raw.url.includes("/_edu/")) {
    const body = await c.req.json();
    const cookie = getCookie(c, "Xemdi-movie-theme");
    console.log("Tag", Tag, cookie, body);
    return new Response(renderToReadableStream(<Tag {...body} />));
  }
  if (c.req.raw.url?.includes("/rpc/") ) {
      return rpcServer(c, next);
  }
  return matchRSCServerRequest({
    // Provide the React Server touchpoints.
    createTemporaryReferenceSet,
    decodeAction,
    decodeFormState,
    decodeReply,
    loadServerAction,
    // The incoming request.
    request: c.req.raw,
    // The app routes.
    routes: routes(),
    // Encode the match with the React Server implementation.
    generateResponse(match, options) {
      return new Response(renderToReadableStream(match.payload, options), {
        status: match.statusCode,
        headers: match.headers,
      });
    },
  })
})

export default app;
if (import.meta.hot) {
  import.meta.hot.accept();
}
