import { CountryDetail } from "./countryDetail.jsx";
import { CountryList } from "./countryList.jsx";
import { SearchBar } from "./searchBar.jsx";
import { SelectRegion } from "./selectRegion.jsx";

export function Body() {
  const APIFILTER =
    "name,population,region,subregion,capital,tld,currencies,languages,borders,flags";
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
  return (
    <div>
      <div>
        <SearchBar />
        <SelectRegion />
        <ul>
          {COUNTRY.map((item, index) => {
            return <CountryList key={index} country={item} />;
          })}
        </ul>
      </div>
      <CountryDetail country={COUNTRY[0]} />
    </div>
  );
}
