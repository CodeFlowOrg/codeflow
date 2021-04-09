import { useState, useEffect, useCallback } from 'react';

export const useFetch = (url) => {
  //Loading state
  const [isLoading, setIsLoading] = useState(true);
  //Error state
  const [isError, setIsError] = useState(false);

  const [data, setData] = useState([]);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);

      if (!response.ok) throw new Error(`${response.status} Product not found`);

      const data = await response.json();

      setData(data);

      //Disable loading screen
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
    }
  }, [url]);
  useEffect(() => {
    fetchData();
  }, [url, fetchData]);

  return { data, isLoading, isError };
};
