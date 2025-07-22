import { useState } from "react";
import "./App.css";
import { Body } from "./component/body.jsx";
import { Header } from "./component/header.jsx";
import { IsDarkContext } from "./context/themeContext.js";

function App() {
  const [isDark, setIsDark] = useState(true);
  return (
    <div
      className={`${
        isDark ? "bg-(--Dark-Mode-Background)" : "bg-(--Light-Mode-Background)"
      }`}
    >
      <Header setIsDark={setIsDark} isDark={isDark} />
      <IsDarkContext value={isDark}>
        <Body />
      </IsDarkContext>
    </div>
  );
}

export default App;
