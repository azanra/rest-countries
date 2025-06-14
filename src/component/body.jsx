import { CountryList } from "./countryList.jsx";
import { SearchBar } from "./searchBar.jsx";
import { SelectRegion } from "./selectRegion.jsx";

export function Body() {
  const country = [
    {
      name: "Germany",
      flag: "https://www.rjtravelagency.com/wp-content/uploads/2024/06/Germany-Flag.jpg",
      population: 81770900,
      region: "Europe",
      capital: ["Berlin"],
    },
  ];
  return (
    <div>
      <div>
        <SearchBar />
        <SelectRegion />
        <ul>
          {country.map((item, index) => {
            return <CountryList key={index} country={item} />;
          })}
        </ul>
      </div>
    </div>
  );
}
