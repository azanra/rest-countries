import { useState } from "react";
import { CountryDetail } from "./countryDetail.jsx";
import { CountryList } from "./countryList.jsx";
import { SearchBar } from "./searchBar.jsx";
import { SelectRegion } from "./selectRegion.jsx";
import { useGetAllCountry } from "../hooks/useGetAllCountry.jsx";
import { SearchCountryList } from "./searchCountryList.jsx";
import { RegionCountryList } from "./regionCountryList.jsx";

export function Body() {
  const [showDetail, setShowDetail] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [region, setRegion] = useState("");

  const {
    country: allCountry,
    loading: allLoading,
    error: allError,
  } = useGetAllCountry();

  const chooseRenderedCountry = () => {
    if (searchKeyword.length > 0) {
      return "search";
    } else if (region.length > 0) {
      return "region";
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
      <div className="flex justify-between px-16 py-7">
        <SearchBar setSearchKeyword={setSearchKeyword} />
        <SelectRegion setRegion={setRegion} />
      </div>
      <div className="grid grid-cols-4 px-16 py-8 gap-16">
        {renderedCountry === "search" && (
          <SearchCountryList
            searchKeyword={searchKeyword}
            chooseCountry={chooseCountry}
          />
        )}
        {renderedCountry === "region" && (
          <RegionCountryList region={region} chooseCountry={chooseCountry} />
        )}
        {renderedCountry === "all" &&
          allCountry.map((item, index) => {
            return (
              <CountryList key={index} country={item} onClick={chooseCountry} />
            );
          })}
      </div>
    </div>
  );
}
