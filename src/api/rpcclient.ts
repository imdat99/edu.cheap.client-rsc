import { httpClientAdapter, proxyTinyRpc } from "@hiogawa/tiny-rpc";
import type { RpcRoutes } from "./rpc";

const endpoint = "/rpc";
const url = import.meta.env.SSR ? "http://localhost" : "";
const headers: Record<string, string> = {}; // inject headers to demonstrate context
export const client = proxyTinyRpc<RpcRoutes>({
  adapter: httpClientAdapter({
    url: url + endpoint,
    pathsForGET: [],
    fetch: async (url, input) => {
      if (import.meta.env.SSR) {
        const app = await import("entry.rsc").then((mod) => mod.default);
        const res = await app.request(new Request(url, input));
        return res;
      }
      const res = await fetch(url, {
        ...input,
        headers: {
          ...input?.headers,
          ...headers,
        },
      });
      return res;
    },
  }),
});
