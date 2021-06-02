import { useEffect, useState } from "react";

const FetchingData = (url) => {
  const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new window.AbortController();
    fetch(url, { signal: abortController.signal })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((data) => {
        setData(data);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
      });
    return () => abortController.abort();
  }, [url]);

  return { data, isPending, error };
};

export default FetchingData;
