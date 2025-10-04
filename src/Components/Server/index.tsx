import { lazy, memo, Suspense } from "react";
type fetchFunc = (input: string | URL | Request, init?: RequestInit) => Promise<Response>;
async function Com() {
  const fetchOpts: RequestInit = {
    method: "POST",
    body: JSON.stringify({
      count: 10,
      title: "Hello from RSC",
    }),
  };
  
  const createFromReadableStream = await (import.meta.env.SSR
    ? import("@vitejs/plugin-rsc/ssr")
    : import("@vitejs/plugin-rsc/browser")
  ).then((m) => m.createFromReadableStream);
  if (import.meta.env.SSR) {
    const { getContext } = await import("hono/context-storage");
    const c = getContext();
    const fetchFunc: fetchFunc = (r, init) => (c as any).env.RSC.fetch(r, init);
    return fetchFunc("http://a/_edu/components", fetchOpts).then(r => createFromReadableStream(r.body!)).then((r) => ({
      default: () => r,
    })) as any;
  } else {
    return fetch("/_edu/components", fetchOpts).then(r => createFromReadableStream(r.body!)).then((r) => ({
      default: () => r,
    }));
  }
}

const Comp = lazy(() => Com());
const FlightComponent = () => {
  return (
    <div >
      <Suspense fallback={<div >Loading...</div>}>
        <Comp />
      </Suspense>
    </div>
  );
};

export default memo(FlightComponent);
