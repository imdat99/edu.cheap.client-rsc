import {
  createFromReadableStream,
  createTemporaryReferenceSet,
  encodeReply,
  setServerCallback
} from "@vitejs/plugin-rsc/browser";
import { startTransition, StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";
import {
  unstable_createCallServer as createCallServer,
  unstable_getRSCStream as getRSCStream,
  unstable_RSCHydratedRouter as RSCHydratedRouter,
  type DataRouter,
  type unstable_RSCPayload as RSCServerPayload,
} from "react-router";
import { SWRConfig } from "swr";

// Create and set the callServer function to support post-hydration server actions.

setServerCallback(
  createCallServer({
    createFromReadableStream,
    createTemporaryReferenceSet,
    encodeReply,
  }),
);
// const Async: FC = () => use(createFromFetch(fetch("/rpc/components")));

// Get and decode the initial server payload
createFromReadableStream<RSCServerPayload>(getRSCStream()).then((payload) => {
  startTransition(async () => {
    const formState = payload.type === "render" ? await payload.formState : undefined;
    const loadedData = Object.values(payload.type === "render" ? payload.loaderData : {}).filter(Boolean).at(-1) || {};
    hydrateRoot(
      document,
      <StrictMode>
        <SWRConfig
      value={{
        revalidateOnFocus: false,
        revalidateIfStale: false,
        revalidateOnReconnect: true,
        // provider: localStorageProvider,
        ...loadedData
      }}
    >
          
        <RSCHydratedRouter
          createFromReadableStream={createFromReadableStream}
          payload={payload}
          routeDiscovery={"lazy"}
          fetch={(r) => {
            console.log("fetch", r);
            return fetch(r)
          }}
        />
        </SWRConfig>
      </StrictMode>,
      {
        // @ts-expect-error - no types for this yet
        formState,
      },
    );
  });
});

if (import.meta.hot) {
  import.meta.hot.on("rsc:update", () => {
    (window as unknown as { __router: DataRouter }).__router.revalidate();
  });
}
// Disable react dev tool on production
// if (process.env.NODE_ENV === "production") {
//   if (typeof window.__REACT_DEVTOOLS_GLOBAL_HOOK__ === "object") {
//     for (const [key, value] of Object.entries(window.__REACT_DEVTOOLS_GLOBAL_HOOK__)) {
//       window.__REACT_DEVTOOLS_GLOBAL_HOOK__[key] =
//         typeof value === "function" ? () => {} : null;
//     }
//   }
// }
