import React from "react";
import "./UserCoinSpace.css";
import { useEffect, useState } from "react";
import { getCoins } from "../../utilsUser/coin/coinFunctions";
import { getMultipleCoins } from "../../utils/utils";
import { CoinCardUser } from "../CoinCardUser/CoinCardUser";

export const UserCoinSpace = (props) => {
  const [userCoins, setUserCoins] = useState([]);
  const mainPortfolio = props.mainPortfolio;
  const userPortfolio = props.userPortfolio;

  const loadCoins = async () => {
    const coinsByPortfolio = await getCoins(mainPortfolio.id);
    if (coinsByPortfolio.length < 1) {
      setUserCoins(null);
    } else {
      const fetchCoins = await getMultipleCoins(coinsByPortfolio);
      await console.log(fetchCoins);
      setUserCoins(fetchCoins);
    }
  };

  useEffect(() => {
    if (Object.keys(mainPortfolio).length < 1) {
      console.log("Wait");
    } else {
      loadCoins();
    }
  }, [mainPortfolio.id]);

  return (
    <div className="UserCoinSpace">
      <CoinCardUser ticker={"Symbol"} logo={null} price={"Price"} />
      {!userCoins ? null : userCoins.length > 0 ? (
        userCoins.map((item, index) => (
          <CoinCardUser
            key={index}
            ticker={item.symbol}
            logo={item.logo}
            price={item.quote.USD.price}
            coinId={item.id}
            mainPortfolio={mainPortfolio}
          />
        ))
      ) : (
        <h1>LOADING...</h1>
      )}
    </div>
  );
};
