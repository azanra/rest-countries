import { CountryDetailInfo } from "./countryDetailInfo";

export function CountryList({ country, onClick }) {
  const { name, flags, population, region, capital } = country;
  const listCapital = capital.join();
  const formattedPopulation = population.toLocaleString();
  const renderList = [
    {
      id: 0,
      title: "Population: ",
      text: formattedPopulation,
    },
    {
      id: 1,
      title: "Region: ",
      text: region,
    },
    {
      id: 2,
      title: "Capital: ",
      text: listCapital,
    },
  ];
  return (
    <div onClick={() => onClick(country)}>
      <div>
        <img
          src={flags.png}
          alt={`${name} Flag`}
          style={{ height: "75px", width: "150px" }}
        />
      </div>
      <h1>{name.common}</h1>
      {renderList.map((item) => {
        return (
          <CountryDetailInfo
            key={item.id}
            title={item.title}
            text={item.text}
          />
        );
      })}
    </div>
  );
}
