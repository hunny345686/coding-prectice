import { useEffect, useRef } from "react";

function App() {
  const [count, setCount] = useState(0);

  const previousCount = usePrevious(count);

  console.log("current:", count);
  console.log("previous:", previousCount);

  return <button onClick={() => setCount(count + 1)}>Increment</button>;
}

const usePrevious = (count) => {
  let value = useRef(count);
  useEffect(() => {
    value.current = count;
  }, [count]);

  return value.current;
};
