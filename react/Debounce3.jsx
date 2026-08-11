import { useEffect, useState } from "react";

function useDebounce(value, delay = 500) {
  const [debounceVal, setDebounceVal] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceVal(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debounceVal;
}

function search() {
  const [seach, setSearch] = useState("");

  const debounceSearch = useDebounce(seach, 400);

  useEffect(() => {
    console.log("API call:", debounceSearch);
  }, [debounceSearch]);
}

return (
  <input
    type="text"
    value={search}
    onChange={(e) => setSearch(e.target.value)}
  />
);
