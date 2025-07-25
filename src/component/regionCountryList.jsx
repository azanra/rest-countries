import { useFilterCountry } from "../hooks/useFilterCountry";
import { CountryList } from "./countryList";
import FetchState from "./fetchState";

export function RegionCountryList({ region, chooseCountry }) {
  const {
    country: regionCountry,
    loading: regionLoading,
    error: regionError,
  } = useFilterCountry(region);

  if (region.length > 0 && regionLoading) {
    return <FetchState text={"Loading the data..."} />;
  }

  if (regionError) {
    return <FetchState text={"Error happened when fetching the data!"} />;
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
