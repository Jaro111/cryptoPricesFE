import "./CryptoSpace.css";
import { getRequest } from "../../utils";
import { useState, useEffect } from "react";
import { CoinCard } from "../CoinCard/CoinCard";
import { useNavigate } from "react-router-dom";

export const CryptoSpace = () => {
  const [data, setData] = useState([]);
  const [coin, setCoin] = useState({});
  const [start, setStart] = useState(1);

  const limit = 100;
  const navigate = useNavigate();

  const currencies = async (start, limit) => {
    const coins = await getRequest(start, limit);
    setData(coins);
  };

  const nextFunc = () => {
    let next = 0;
    next = start + 100;
    currencies(next, limit);
    setStart(next);
    console.log(start);
  };

  const prevFunc = () => {
    let prev = 0;
    prev = start - 100;
    if (prev >= 1) {
      currencies(prev, limit);
      setStart(prev);
    } else {
      prev = 0;
    }
  };

  //
  //
  const clickCoin = (item) => {
    console.log(item);
    navigate("./CoinPage", { state: item });
  };

  useEffect(() => {
    currencies(start, limit);
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
        <button className="nextButton" onClick={() => prevFunc()}>
          PREV
        </button>
        <button className="prevButton" onClick={() => nextFunc()}>
          NEXT
        </button>
      </div>
    </div>
  );
};
