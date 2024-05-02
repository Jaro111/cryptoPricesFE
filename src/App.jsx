import { useState } from "react";
import { useEffect } from "react";
import React from "react";
import { getRequest } from "./utils";
import "./App.css";
import { CryptoSpace } from "./components/CryptoSpace/CryptoSpace";

function App() {
  const [data, setData] = useState([]);

  const currencies = async () => {
    const coins = await getRequest();
    setData(coins);
  };

  useEffect(() => {
    currencies();
  }, []);

  return (
    <>
      <div>
        {data.map((item, index) => {
          return <p key={index}>{item.name}</p>;
        })}
      </div>
    </>
  );
}

export default App;
