import { useEffect, useState } from 'react';

const useFetch = (url, params = {}) => {
  const [result, setResult] = useState(null);
  useEffect(() => {
    if (url) {
      fetch(`http://ma-api.com/${url}`, params)
        .then((res) => res.json())
        .then((data) => setResult(data));
    }
  }, [url]);
  return result;
};

export default useFetch;
