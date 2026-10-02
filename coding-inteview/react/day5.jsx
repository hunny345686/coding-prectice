import React, { useState, useCallback } from "react";
const Child = React.memo(({ onClick, count }) => {
  console.log("Child render");

  return <button onClick={onClick}>Click {count}</button>;
});

export default function Parent() {
  const [count, setCount] = useState(0);

  const funCallback = useCallback(() => {
    console.log("clicked");
  }, []);

  return (
    <div>
      <p>{count}</p>

      <button onClick={() => setCount(count + 1)}>Increment</button>

      <Child onClick={funCallback} />
    </div>
  );
}
