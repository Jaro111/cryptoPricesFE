import "./CryptoSpace.css";
import { getRequest } from "../../utils";
import { useState, useEffect } from "react";
import { CoinCard } from "../CoinCard/CoinCard";

export const CryptoSpace = (props) => {
  const [data, setData] = useState([]);

  const currencies = async () => {
    const coins = await getRequest(1, 50);
    setData(coins);
  };

  useEffect(() => {
    currencies();
  }, []);
  return (
    <div className="centre">
      <div className="CryptoSpace">
        {data.map((item, index) => {
          return (
            <CoinCard
              key={index}
              logo={item.logo}
              rank={item.rank}
              ticker={item.symbol}
              price={item.quote.USD.price}
              pChange24={item.quote.USD.percent_change_24h}
            />
          );
        })}
      </div>
      <div className="blabla">
        <button className="nextButton">PREV</button>
        <button className="prevButton">NEXT</button>
      </div>
    </div>
  );
};
