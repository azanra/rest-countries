import { useEffect, useState } from "react";
import { APIFILTER } from "../enum/enum.js";

export function useSearchCounty(searchKeyword) {
  const [country, setCountry] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const FILTER = APIFILTER;
  const URL = `https://restcountries.com/v3.1/name/${searchKeyword}?fields=${FILTER}`;

  useEffect(() => {
    if (searchKeyword.length > 0) {
      fetch(URL)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Error");
          }
          return response.json();
        })
        .then((response) => setCountry(response))
        .then((error) => setError(error))
        .finally(() => setLoading(false));
    }
  }, [URL, searchKeyword]);

  return { country, loading, error };
}
