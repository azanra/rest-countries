import { useEffect, useState } from "react";
import { APIFILTER } from "../enum/enum";

export function useFilterCountry(region) {
  const [country, setCountry] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const FILTER = APIFILTER;
  const URL = `https://restcountries.com/v3.1/region/${region}?fields=${FILTER}`;

  useEffect(() => {
    fetch(URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error Response: ${response.status}`);
        }
        return response.json();
      })
      .then((response) => setCountry(response))
      .then((error) => setError(error))
      .finally(() => setLoading(false));
  }, [URL]);

  return { country, loading, error };
}
