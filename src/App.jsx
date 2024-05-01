import { useState } from "react";
import React from "react";
import "./App.css";
import { CryptoSpace } from "./components/CryptoSpace/CryptoSpace";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <CryptoSpace />
    </>
  );
}

export default App;
