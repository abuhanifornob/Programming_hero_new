import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Headers from "./components/Headers/Headers";
import Meals from "./components/Meals/Meals";

function App() {
  return (
    <>
      <Headers></Headers>
      <Meals></Meals>
    </>
  );
}

export default App;
