import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const inc = () => {
    setCount((prev) => prev + 1);
  };
  const dec = () => {
    if (count < 0) {
      return;
    }
    setCount((prev) => prev - 1);
  };
  return (
    <div>
      <p>{count}</p>
      <button onClick={inc}>Inclrement</button>
      <button onClick={dec}>Decreament</button>
      <button
        onClick={() => {
          setCount(0);
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default Counter;

import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);

  console.log("Render:", count);

  useEffect(() => {
    console.log("Effect:", count);
  }, [count]);

  return <button onClick={() => setCount(count + 1)}>Increment</button>;
}

// Out put will be
// on rander "Render:", 0 "Effect:", 0
// btn click "Render:", 1 "Effect:", 1
