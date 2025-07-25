import { useContext } from "react";
import { IsDarkContext } from "../context/themeContext";

function FetchState({ text }) {
  const isDark = useContext(IsDarkContext);
  return (
    <div className="h-screen">
      <p
        className={`${
          isDark
            ? "text-(--Dark-Mode-Text-Light-Mode)"
            : "text-(--Light-Mode-Text)"
        } font-bold`}
      >
        {text}
      </p>
    </div>
  );
}

export default FetchState;
