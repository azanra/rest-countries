import { useGetSearchCountry } from "../hooks/useSearchCountry";
import { CountryList } from "./countryList";
import FetchState from "./fetchState";

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
    return <FetchState text={"Loading the data..."} />;
  }

  if (searchError) {
    return <FetchState text={"Error happened when fetching the data!"} />;
  }

  if (isEmpty(searchCountry) && !searchLoading && searchError === null) {
    return <FetchState text={"Country is not found!"} />;
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
