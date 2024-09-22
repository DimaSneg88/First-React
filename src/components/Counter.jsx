import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  console.log(count);
  function plus() {
    setCount((prev) => prev + 1);
  }
  function minus() {
    setCount((prev) => prev - 1);
  }
  return (
    <div>
      <button onClick={minus}>-</button>
      <span>{count}</span>
      <button onClick={plus}>+</button>
    </div>
  );
}
