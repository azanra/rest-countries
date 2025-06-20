import { useEffect, useState } from "react";
import { APIFILTER } from "../enum/enum.js";

export function useCodeCountry(code) {
  const [country, setCountry] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const FIELDS = APIFILTER;
  const URL = `https://restcountries.com/v3.1/alpha/${code}?fields=${FIELDS}`;

  useEffect(() => {
    fetch(URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error");
        }
        return response.json();
      })
      .then((response) => setCountry(response))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, [URL]);

  return { country, loading, error };
}

export function getBorderCountry(border) {
  const borderCountry = border.map((item) => {
    const { country, loading, error } = useCodeCountry(item);
    return { country, loading, error };
  });

  return borderCountry;
}
