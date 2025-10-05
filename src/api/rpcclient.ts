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
        console.log("rpcclient fetch", url, input);
        const { getContext } = await import("hono/context-storage");
        const c = getContext();
        const urlx = new Request(url)
        const res = await (c as any).env.RSC.fetch(urlx.url, urlx);
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
