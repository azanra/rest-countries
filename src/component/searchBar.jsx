import debounce from "lodash.debounce";
import { useContext, useMemo } from "react";
import { IsDarkContext } from "../context/themeContext";

export function SearchBar({ setSearchKeyword }) {
  const isDark = useContext(IsDarkContext);
  console.log(isDark);

  const handleChange = (e) => {
    setSearchKeyword(e.target.value);
  };

  const debouncedKeyword = useMemo(() => {
    return debounce(handleChange, 1000);
  }, []);

  return (
    <div
      className={`flex ${
        isDark
          ? "bg-(--Dark-Mode-Elements) shadow-lg"
          : "bg-(--Light-Mode-Background) shadow-sm "
      } px-4 py-3 gap-4 items-center rounded-md w-[30%]`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="25px"
        height="25px"
        viewBox="0 0 30 30"
      >
        <path
          d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"
          className={`${
            isDark
              ? "fill-(--Dark-Mode-Text-Light-Mode)"
              : "fill-(--Light-Mode-Input)"
          }`}
        ></path>
      </svg>
      <input
        type="text"
        placeholder="Search for a country..."
        onChange={debouncedKeyword}
        name="search"
        className={`${
          isDark
            ? "text-(--Dark-Mode-Text-Light-Mode) placeholder:text-(--Dark-Mode-Text-Light-Mode)"
            : "text-(--Light-Mode-Input) placeholder:text-(--Light-Mode-Input) "
        } `}
      />
    </div>
  );
}
