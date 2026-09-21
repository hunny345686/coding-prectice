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
