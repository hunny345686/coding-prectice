import { useEffect } from "react";

const useDebounce = (search, delay) => {
  const [debounceVal, setDebounceVal] = useState("");

  useEffect(() => {
    let timer = setTimeout(() => {
      setDebounceVal(search);
    }, delay);
    return () => clearTimeout(timer);
  }, [search, delay]);

  return debounceVal;
};

function Search() {
  const [search, setSearch] = useState("");

  const debouncedSearch = useDebounce(search, 500);

  useEffect(() => {
    if (debouncedSearch) {
      console.log("API call:", debouncedSearch);
    }
  }, [debouncedSearch]);

  return <input value={search} onChange={(e) => setSearch(e.target.value)} />;
}
