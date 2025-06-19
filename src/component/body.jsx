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

  const COUNTRY = [
    {
      flags: {
        png: "https://flagcdn.com/w320/de.png",
        svg: "https://flagcdn.com/de.svg",
        alt: "The flag of Germany is composed of three equal horizontal bands of black, red and gold.",
      },
      name: {
        common: "Germany",
        official: "Federal Republic of Germany",
        nativeName: {
          deu: {
            official: "Bundesrepublik Deutschland",
            common: "Deutschland",
          },
        },
      },
      tld: [".de"],
      currencies: {
        EUR: {
          name: "Euro",
          symbol: "€",
        },
      },
      capital: ["Berlin"],
      region: "Europe",
      subregion: "Western Europe",
      languages: {
        deu: "German",
      },
      borders: ["AUT", "BEL", "CZE", "DNK", "FRA", "LUX", "NLD", "POL", "CHE"],
      population: 83240525,
    },
  ];

  if (showDetail) {
    return <CountryDetail country={selectedCountry} />;
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
