import { useEffect, useState } from 'react';

const useFetch = (url, query = 'page=1') => {
  const [result, setResult] = useState(null);
  useEffect(() => {
    if (url) {
      fetch(`http://ma-api.com/${url}?${query}`)
        .then((res) => res.json())
        .then((data) => setResult(data));
    }
  }, [url]);
  return result;
};

export default useFetch;
