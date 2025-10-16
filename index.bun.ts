import { Hono, type MiddlewareHandler } from "hono";
// import { compress } from "hono/compress";
import { etag } from "hono/etag";
import { cors } from "hono/cors";
import { serveStatic } from 'hono/bun'
import { compress } from '@hono/bun-compress'

const app = new Hono();

// helper apply middleware
const applyMiddlewareToPaths = (paths: string[], ...middleware: any[]) => {
  for (const path of paths) {
    app.use(path, ...middleware);
  }
};

const middlewares: MiddlewareHandler[] = [
  compress(),
  etag(),
  cors(),
  async (c, next) => {
    await next();
    if (c.res.status === 200) {
      c.res.headers.set("Cache-Control", "public, max-age=31536000");
    }
  },
  serveStatic({ root: "dist/client" }),
];

applyMiddlewareToPaths(
  ["/static/*", "/assets/*", "/images/*", "/locales/*", "/site.webmanifest"],
  ...middlewares
);

app.use("*", compress());

// import server bundle (SSR entry)
const module = await import("./dist/rsc/index.js" as any).then((mod) => mod.default);
app.use(async (c) => module.fetch(c.req.raw));
// await import("./dist/rsc/index.js" as any)
//   .then((mod) => mod.default)
//   .then((module) => {
//     app.all("*", async (c) => module.fetch(c.req.raw));
//     console.log("module loaded", module);
//   });

console.log("Listening on http://localhost:3000");
export default { 
  port: 3000, 
  fetch: app.fetch, 
} 
