import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fechData() {
      const contrller = new AbortController();
      try {
        const res = await fetch(url, { signal: contrller.signal });
        const result = await res.json();
        setData(result);
      } catch (error) {
        setError("Something Went wrong " + error);
      } finally {
        setLoading(false);
      }
    }
    fechData();

    return () => {
      controller.abort();
    };
  }, [url]);

  return { data, loading, error };
};

// and how to use

const { data, loading, error } = useFetch("https://localhost:3000/data");
