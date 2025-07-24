import { useContext } from "react";
import { CountryDetailInfo } from "./countryDetailInfo";
import { IsDarkContext } from "../context/themeContext";

export function CountryList({ country, onClick }) {
  const isDark = useContext(IsDarkContext);
  const { name, flags, population, region, capital } = country;
  const listCapital = capital.join(", ");
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
    <div
      onClick={() => onClick(country)}
      className={`${
        isDark
          ? "bg-(--Dark-Mode-Elements) shadow-lg"
          : "bg-(--Light-Mode-Background) shadow-sm"
      } rounded-md`}
    >
      <img
        src={flags.png}
        alt={`${name} Flag`}
        className="w-full h-[50%] rounded-md"
      />
      <div
        className={`pb-8 pt-4 px-6 ${
          isDark
            ? "text-(--Dark-Mode-Text-Light-Mode)"
            : "text-(--Light-Mode-Text)"
        }`}
      >
        <h1 className="my-4 font-bold text-xl">{name.common}</h1>
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
    </div>
  );
}
