import { useGetSearchCountry } from "../hooks/useSearchCountry";
import { CountryList } from "./countryList";

export function SearchCountryList({ searchKeyword, chooseCountry }) {
  const {
    country: searchCountry,
    loading: searchLoading,
    error: searchError,
  } = useGetSearchCountry(searchKeyword);

  if (searchKeyword.length > 0 && searchLoading) {
    return <p>Loading the data...</p>;
  }

  if (searchError) {
    <p>Error happened when fetching the data!</p>;
  }
  return (
    <>
      {searchCountry.map((item, index) => {
        return (
          <CountryList key={index} country={item} onClick={chooseCountry} />
        );
      })}
    </>
  );
}
