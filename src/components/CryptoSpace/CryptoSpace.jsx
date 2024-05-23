import "./CryptoSpace.css";
import { getRequest } from "../../utils/utils";
import { useState, useEffect } from "react";
import { CoinCard } from "../CoinCard/CoinCard";
import { useNavigate } from "react-router-dom";
import { ButtonDiv } from "../ButtonDiv/ButtonDiv";

export const CryptoSpace = () => {
  const [data, setData] = useState([]);
  // const [coin, setCoin] = useState({});
  const [start, setStart] = useState(1);
  const [pchange, setPchange] = useState("");
  const [change1h, setChange1h] = useState(false);
  const [change24h, setChange24h] = useState(true);
  const [change7d, setChange7d] = useState(false);
  const [change30d, setChange30d] = useState(false);

  const navigate = useNavigate();

  const limit = 100;

  const currencies = async (start, limit) => {
    const coins = await getRequest(start, limit);
    setData(coins);
  };

  const nextFunc = () => {
    let next = 0;
    next = start + 100;
    currencies(next, limit);
    setStart(next);
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

  const clickCoin = (item) => {
    navigate("./CoinPage", { state: item.id });
  };
  //
  const change1HClick = () => {
    setChange1h(true);
    setChange24h(false);
    setChange7d(false);
    setChange30d(false);
  };
  const change24HClick = () => {
    setChange24h(true);
    setChange1h(false);
    setChange7d(false);
    setChange30d(false);
  };
  const change7DClick = () => {
    setChange7d(true);
    setChange1h(false);
    setChange24h(false);
    setChange30d(false);
  };
  const change30DClick = () => {
    setChange30d(true);
    setChange1h(false);
    setChange24h(false);
    setChange7d(false);
  };

  //
  useEffect(() => {
    currencies(start, limit);
  }, []);
  return (
    <div className="centre">
      <ButtonDiv
        change1HClick={change1HClick}
        change24HClick={change24HClick}
        change7DClick={change7DClick}
        change30DClick={change30DClick}
        change1h={`${change1h}`}
        change24h={`${change24h}`}
        change7d={`${change7d}`}
        change30d={`${change30d}`}
      />
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
              pChange24={
                change30d
                  ? item.quote.USD.percent_change_30d
                  : change7d
                  ? item.quote.USD.percent_change_7d
                  : change1h
                  ? item.quote.USD.percent_change_1h
                  : item.quote.USD.percent_change_24h
              }
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
