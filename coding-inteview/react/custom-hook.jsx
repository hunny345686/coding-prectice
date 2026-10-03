import { useEffect, useRef, useState } from "react";

const usePrev = (value) => {
  let prevValRef = useRef(value);
  useEffect(() => {
    prevValRef.current = value;
  }, [value]);

  return prevValRef.current;
};

function App() {
  const [value, setValue] = useState(0);
  const prevValRef = usePrev(value);
  console.log(prevValRef);
  return (
    <div>
      <p> New Val{value}</p>
      <p> Prev Val{prevValRef}</p>
      <button onClick={() => setValue(value + 1)}>Incremant</button>
    </div>
  );
}

export default App;
