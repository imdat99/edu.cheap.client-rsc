"use client";
import {
  createFromReadableStream,
  // createTemporaryReferenceSet,
  encodeReply,
  setServerCallback,
  createFromFetch,
} from "@vitejs/plugin-rsc/browser";
import { client } from "api/rpcclient";
import React, { Suspense, use, useEffect, type FC } from "react";
import { Link } from "react-router";
import useSWR from "swr";

const Counter = () => {
  const [count, setCount] = React.useState(0);
  // const Comp
  useEffect(() => {
    // console.log("createFromFetch", createFromFetch);
    // console.log("Comp", Comp);
  }, []);
  // console.log("Comp", Comp);
  return (
    <div>
      <p>Counter: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <Link to={`/tags/${count}`}>Go to Tag {count}</Link>
      <Suspense fallback={<div>Loading...</div>}>
        {createFromFetch(fetch("/rpc/components"))}
      </Suspense>
    </div>
  );
};

export default Counter;
