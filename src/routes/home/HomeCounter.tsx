"use client";

import { client } from "api/rpcclient";
import useSWR, { mutate } from "swr";
export const HomeCounter = () => {
    const { data, isLoading } = useSWR("count", client.getCounter, {
    dedupingInterval: 0,
  });
  const testFn = async () => {
    // await client.checkId("good");
    await client.incrementCounter({ delta: 1 });
    mutate("count", undefined, { revalidate: true })
  }
    return <>
    <div>
        <h2 className="text-2xl font-bold mb-4">Home Counter</h2>
        <p className="mb-4">Counter from server: {isLoading ? "Loading..." : data}</p>
        <button className="relative inline-flex items-center justify-center gap-2 font-medium text-sm
    h-10 px-4 rounded-lg whitespace-nowrap
    bg-[var(--color-secondary)] text-[var(--color-white)]
    hover:bg-[color-mix(in_oklab,_var(--color-secondary),_transparent_10%)]
    disabled:opacity-75 dark:disabled:opacity-75 disabled:cursor-default disabled:pointer-events-none
    [[data-flux-button-group]_&]:border-r-0
    [:is([data-flux-button-group]>&:last-child,_[data-flux-button-group]_:last-child>&)]:border-r-[1px]
    dark:[:is([data-flux-button-group]>&:last-child,_[data-flux-button-group]_:last-child>&)]:border-r-0
    dark:[:is([data-flux-button-group]>&:last-child,_[data-flux-button-group]_:last-child>&)]:border-l-[1px]
    [:is([data-flux-button-group]>&:not(:first-child),_[data-flux-button-group]_:not(:first-child)>&)]:border-l-[color-mix(in_srgb,var(--color-accent-foreground),transparent_85%)]" onClick={testFn}>Increment Counter</button>
    </div>
    </>
}