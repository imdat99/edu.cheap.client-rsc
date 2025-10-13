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
        <button className="app_btn" onClick={testFn}>Increment Counter</button>
    </div>
    </>
}