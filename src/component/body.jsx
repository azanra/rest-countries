import { useState } from "react";
import { CountryDetail } from "./countryDetail.jsx";
import { CountryList } from "./countryList.jsx";
import { SearchBar } from "./searchBar.jsx";
import { SelectRegion } from "./selectRegion.jsx";
import { useAllCountry } from "../hooks/useGetAllCountry.jsx";
import { useSearchCounty } from "../hooks/useSearchCountry.jsx";

export function Body() {
  const [showDetail, setShowDetail] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const { allCountry, loading, error } = useAllCountry();
  const [searchKeyword, setSearchKeyword] = useState("");
  const {
    country: searchCountry,
    loading: searchLoading,
    error: searchError,
  } = useSearchCounty(searchKeyword);

  const searchIsSuccess =
    !searchLoading &&
    searchError === undefined &&
    Object.keys(searchCountry).length !== 0;

  const allIsSuccess = !loading && error === null && allCountry.length > 0;

  console.log("search country", searchCountry);
  console.log("selected country", selectedCountry);
  console.log("search keyword", searchKeyword);

  const chooseCountry = (country) => {
    setSelectedCountry(country);
    setShowDetail(true);
  };

  if (showDetail) {
    return (
      <CountryDetail
        setCountryDetail={setSelectedCountry}
        country={selectedCountry}
        setShowDetail={setShowDetail}
      />
    );
  }
  const isLoading = loading || (searchKeyword.length > 0 && searchLoading);

  const renderCountry = () => {
    if (searchIsSuccess) {
      return searchCountry;
    } else if (allIsSuccess) {
      return allCountry;
    } else {
      return [];
    }
  };

  if (isLoading) {
    return <p>Fetching data...</p>;
  }

  const renderedCountry = renderCountry();

  if (error || searchError) {
    return <p>Connection error!</p>;
  }

  return (
    <div>
      <div>
        <SearchBar
          searchKeyword={searchKeyword}
          setSearchKeyword={setSearchKeyword}
        />
        {!searchIsSuccess && searchKeyword.length > 0 && (
          <p>Unable to find the country</p>
        )}
        <SelectRegion />
      </div>
      <ul>
        {renderedCountry.map((item, index) => {
          return (
            <CountryList key={index} country={item} onClick={chooseCountry} />
          );
        })}
      </ul>
    </div>
  );
}
