import { useEffect, useState } from "react";
import { APIFILTER } from "../enum/enum.js";

export function useAllCountry() {
  const [allCountry, setAllCountry] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const FIELDS = APIFILTER;
  const URL = `https://restcountries.com/v3.1/all?fields=${FIELDS}`;

  useEffect(() => {
    if (!sessionStorage.getItem("allCountry")) {
      fetch(URL)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Error");
          }
          return response.json();
        })
        .then((response) => {
          setAllCountry(response);
          sessionStorage.setItem("allCountry", JSON.stringify(response));
        })
        .catch((error) => setError(error))
        .finally(() => setLoading(false));
    } else {
      setAllCountry(JSON.parse(sessionStorage.getItem("allCountry")));
      setLoading(false);
    }
  }, []);

  return { allCountry, loading, error };
}
