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
const customCreateFromReadableStream: <T>(stream: ReadableStream<Uint8Array>, options?: object) => Promise<T> = (body, obj) => {
  console.log("customCreateFromReadableStream", body, obj);
  return createFromReadableStream(body, obj);
}

setServerCallback(
  createCallServer({
    createFromReadableStream: customCreateFromReadableStream,
    createTemporaryReferenceSet,
    encodeReply,
  }),
);
// const Async: FC = () => use(createFromFetch(fetch("/rpc/components")));

// Get and decode the initial server payload
customCreateFromReadableStream<RSCServerPayload>(getRSCStream()).then((payload) => {
  startTransition(async () => {
    const formState =
      payload.type === "render" ? await payload.formState : undefined;

    hydrateRoot(
      document,
      <StrictMode>
        <SWRConfig>
          
        <RSCHydratedRouter
          createFromReadableStream={customCreateFromReadableStream}
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
