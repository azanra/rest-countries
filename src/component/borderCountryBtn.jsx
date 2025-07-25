import { useContext } from "react";
import { useCodeCountry } from "../hooks/useCodeCountry.jsx";
import { IsDarkContext } from "../context/themeContext.js";

export default function BorderCountryBtn({ borderCountry, setCountryDetail }) {
  const { country, loading, error } = useCodeCountry(borderCountry);
  const isDark = useContext(IsDarkContext);
  if (loading) {
    return <p>Loading....</p>;
  }

  if (error) {
    return <p>Error!</p>;
  }

  return (
    <button
      onClick={() => setCountryDetail(country)}
      className={`px-6 py-2 rounded-md ${
        isDark
          ? "bg-(--Dark-Mode-Elements) shadow-lg"
          : "bg-(--Light-Mode-Background) shadow-sm"
      }`}
    >
      {country.name.common}
    </button>
  );
}
