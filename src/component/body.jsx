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

  const countryIsNotFound =
    !searchLoading &&
    searchError === null &&
    Object.keys(searchCountry).length === 0
      ? true
      : false;

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

  if (error || searchError) {
    return <p>Connection error!</p>;
  }

  return (
    <div>
      <div>
        <SearchBar
          searhKeyword={searchKeyword}
          setSearchKeyword={setSearchKeyword}
        />
        {countryIsNotFound && <p>Unable to find the country</p>}
        <SelectRegion />
      </div>
      {isLoading ? (
        <p>Loading the data...</p>
      ) : (
        <ul>
          {!searchLoading &&
            !countryIsNotFound &&
            searchCountry.map((item, index) => {
              return (
                <CountryList
                  key={index}
                  country={item}
                  onClick={chooseCountry}
                />
              );
            })}
          {allCountry.map((item, index) => {
            return (
              <CountryList key={index} country={item} onClick={chooseCountry} />
            );
          })}
        </ul>
      )}
    </div>
  );
}
