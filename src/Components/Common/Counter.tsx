"use client";
import React from 'react'
const OhterCounter = () => {
    const [count, setCount] = React.useState(0);
  return (
    <div>
        <h1>Other Counter!</h1>
      <div>Counter: {count}</div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}

export default OhterCounter