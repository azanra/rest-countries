import { useState } from "react";
import { CountryDetail } from "./countryDetail.jsx";
import { CountryList } from "./countryList.jsx";
import { SearchBar } from "./searchBar.jsx";
import { SelectRegion } from "./selectRegion.jsx";
import { useAllCountry } from "../hooks/useGetAllCountry.jsx";

export function Body() {
  const [showDetail, setShowDetail] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const { allCountry, loading, error } = useAllCountry();
  console.log(selectedCountry);

  const chooseCountry = (country) => {
    setSelectedCountry(country);
    setShowDetail(true);
  };


  if (showDetail) {
    return (
      <CountryDetail
        setCountryDetail={setSelectedCountry}
        country={selectedCountry}
      />
    );
  }

  if (loading) {
    return <p>Loading data...</p>;
  }

  if (error) {
    return <p>Connection error!</p>;
  }

  return (
    <div>
      <div>
        <SearchBar />
        <SelectRegion />
        <ul>
          {allCountry.length > 0 &&
            allCountry.map((item, index) => {
              return (
                <CountryList
                  key={index}
                  country={item}
                  onClick={chooseCountry}
                />
              );
            })}
        </ul>
      </div>
    </div>
  );
}
