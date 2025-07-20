import { useGetSearchCountry } from "../hooks/useSearchCountry";
import { CountryList } from "./countryList";

export function SearchCountryList({ searchKeyword, chooseCountry }) {
  const {
    country: searchCountry,
    loading: searchLoading,
    error: searchError,
  } = useGetSearchCountry(searchKeyword);

  const isEmpty = (obj) => {
    return Object.keys(obj).length === 0;
  };

  if (searchKeyword.length > 0 && searchLoading) {
    return <p>Loading the data...</p>;
  }

  if (searchError) {
    return <p>Error happened when fetching the data!</p>;
  }

  if (isEmpty(searchCountry) && !searchLoading && searchError === null) {
    return <p>Country not found!</p>;
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
