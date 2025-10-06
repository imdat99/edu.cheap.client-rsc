import {
  createTemporaryReferenceSet,
  decodeAction,
  decodeFormState,
  decodeReply,
  loadServerAction,
  renderToReadableStream,
} from "@vitejs/plugin-rsc/rsc";
import { unstable_matchRSCServerRequest as matchRSCServerRequest } from "react-router";

import { rpcServer } from "api/rpc";
import Tag from "Components/Server/Tag.server";
import { Hono } from "hono";
import { contextStorage } from "hono/context-storage";
import {
  getCookie
} from 'hono/cookie';
import { cors } from "hono/cors";
import { routes } from "./routes/config";
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
app.use(cors(),async (c, next) => {
  c.set("fetch", app.request.bind(app));
  await next();
}, contextStorage());

// app.all(".rsc/:path*", async (c, next) => {
// app.all("/rpc/:path*", rpcServer);

// });
app.use(rpcServer);
app.use(async (c, next) => {
  if (!c.req.raw.url.includes("/_edu/")) return next();
  const body = await c.req.json();
  const cookie = getCookie(c, "Xemdi-movie-theme");
  console.log("Tag", Tag, cookie, body);
  return new Response(renderToReadableStream(<Tag {...body} />), {
    headers: {
      'Content-Type': 'text/javascript; charset=utf-8',
    },
  });
});
app.all(async (c, next) => {
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
        headers: {
          ...match.headers,
          'cache-control': "public, max-age=31536000, immutable",
        },
      });
    },
  })
})

export default app;
if (import.meta.hot) {
  import.meta.hot.accept();
}
