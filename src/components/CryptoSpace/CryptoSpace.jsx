import "./CryptoSpace.css";
import { getRequest } from "../../utils";
import { useState, useEffect } from "react";
import { CoinCard } from "../CoinCard/CoinCard";
import { useNavigate } from "react-router-dom";

export const CryptoSpace = () => {
  const [data, setData] = useState([]);
  const [coin, setCoin] = useState({});

  const currencies = async () => {
    const coins = await getRequest(1, 50);
    setData(coins);
  };
  const navigate = useNavigate();
  //

  const clickCoin = (item) => {
    navigate("./CoinPage", { state: item });
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
              clickCoin={() => clickCoin(item)}
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
