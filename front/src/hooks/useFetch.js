import { useEffect, useState } from 'react';

const useFetch = (url) => {
  const [result, setResult] = useState(null);
  useEffect(() => {
    if (url) {
      fetch(`http://ma-api.com/${url}`)
        .then((res) => res.json())
        .then((data) => setResult(data));
    }
  }, []);
  return result;
};

export default useFetch;
