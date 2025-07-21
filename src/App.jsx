import { useState } from "react";
import "./App.css";
import { Body } from "./component/body.jsx";
import { Header } from "./component/header.jsx";
import { IsDarkContext } from "./context/themeContext.js";

function App() {
  const [isDark, setIsDark] = useState(true);
  return (
    <>
      <Header setIsDark={setIsDark} />
      <IsDarkContext value={isDark}>
        <Body />
      </IsDarkContext>
    </>
  );
}

export default App;
