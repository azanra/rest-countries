import { useContext } from "react";
import { IsDarkContext } from "../context/themeContext";

export function SelectRegion({ setRegion }) {
  const isDark = useContext(IsDarkContext);
  const regionList = ["Africa", "America", "Asia", "Europe", "Oceania"];
  return (
    <div
      className={`${
        isDark
          ? "bg-(--Dark-Mode-Elements) text-(--Dark-Mode-Text-Light-Mode) shadow-lg"
          : "bg-(--Light-Mode-Background) text-(--Light-Mode-Text) shadow-sm"
      } rounded-md px-4 py-2 flex justify-center items-center`}
    >
      <select
        name="region"
        id="region"
        onChange={(e) => setRegion(e.target.value.toLowerCase())}
        className="bg-inherit text-inherit pr-16"
      >
        <option value="">Filter by Region</option>
        {regionList.map((item, index) => {
          return (
            <option key={index} value={item.toLowerCase()}>
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
}
