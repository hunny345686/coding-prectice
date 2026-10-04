import { useEffect, useState } from "react";

const useDebounce = (value, delay) => {
  const [debounceVal, setDebounceVal] = useState("");

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebounceVal(value);
    }, delay);

    return () => clearTimeout(timerId);
  }, [value, delay]);

  return debounceVal;
};

function App() {
  const [value, setValue] = useState("");

  const [debanceVal, setdebanceVal] = useState("");

  const debanced = useDebounce(value, 500);

  useEffect(() => {
    if (!debanced) return;
    setdebanceVal(debanced);
  }, [debanced]);

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <p>{debanceVal}</p>
    </div>
  );
}

export default App;
