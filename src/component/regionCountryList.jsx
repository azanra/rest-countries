import { useFilterCountry } from "../hooks/useFilterCountry";
import { CountryList } from "./countryList";

export function RegionCountryList({ region, chooseCountry }) {
  const {
    country: regionCountry,
    loading: regionLoading,
    error: regionError,
  } = useFilterCountry(region);

  if (region.length > 0 && regionLoading) {
    return <p>Loading the data...</p>;
  }

  if (regionError) {
    return <p>Error happened when fetching the data...</p>;
  }

  return (
    <>
      {regionCountry.map((item, index) => {
        return (
          <CountryList key={index} country={item} onClick={chooseCountry} />
        );
      })}
    </>
  );
}
