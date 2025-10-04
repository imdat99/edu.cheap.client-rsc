"use client";
import FlightComponent from "Components/Server";
import React, { Suspense, useEffect } from "react";
import { Link } from "react-router";
// import {
//   createFromReadableStream
// } from "@vitejs/plugin-rsc/browser";

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
        <FlightComponent/>
    </div>
  );
};

export default Counter;
