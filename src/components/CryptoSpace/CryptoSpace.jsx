import "./CryptoSpace.css";
import { getRequest } from "../../utils";
import { useState, useEffect } from "react";
import { CoinCard } from "../CoinCard/CoinCard";

export const CryptoSpace = (props) => {
  const [data, setData] = useState([]);

  const currencies = async () => {
    getRequest();
    const coins = await getRequest();
    setData(coins);
    console.log(coins);
  };

  useEffect(() => {
    currencies();
  }, []);
  return (
    <div className="CryptoSpace">
      {data.map((item, index) => {
        return (
          <CoinCard
            key={index}
            logo={item.logo}
            ticker={item.symbol}
            price={item.quote.USD.price}
            pChange24={item.quote.USD.percent_change_24h}
          />
        );
      })}
    </div>
  );
};
