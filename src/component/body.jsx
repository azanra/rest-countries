import { useState } from "react";
import { CountryDetail } from "./countryDetail.jsx";
import { CountryList } from "./countryList.jsx";
import { SearchBar } from "./searchBar.jsx";
import { SelectRegion } from "./selectRegion.jsx";
import { useGetAllCountry } from "../hooks/useGetAllCountry.jsx";
import { SearchCountryList } from "./searchCountryList.jsx";

export function Body() {
  const [showDetail, setShowDetail] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [searchKeyword, setSearchKeyword] = useState("");

  const {
    country: allCountry,
    loading: allLoading,
    error: allError,
  } = useGetAllCountry();

  const chooseRenderedCountry = () => {
    if (searchKeyword.length > 0) {
      return "search";
    } else {
      return "all";
    }
  };

  const renderedCountry = chooseRenderedCountry();

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

  if (allLoading) {
    return <p>Loading the data...</p>;
  }

  if (allError) {
    return <p>Error happened when fetching the data!</p>;
  }

  return (
    <div>
      <div>
        <SearchBar setSearchKeyword={setSearchKeyword} />
        <SelectRegion />
      </div>
      <ul>
        {renderedCountry === "search" && (
          <SearchCountryList
            searchKeyword={searchKeyword}
            chooseCountry={chooseCountry}
          />
        )}
        {renderedCountry === "all" &&
          allCountry.map((item, index) => {
            return (
              <CountryList key={index} country={item} onClick={chooseCountry} />
            );
          })}
      </ul>
    </div>
  );
}
