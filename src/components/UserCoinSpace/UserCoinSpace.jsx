import React from "react";
import { useEffect, useState } from "react";
import { CoinCardUser } from "../CoinCardUser/CoinCardUser";
import { CoinCardUserMenu } from "../CoinCardUserMenu/CoinCardUserMeny";
import { getBuyDetails } from "../../utilsUser/buyDetails/buyDetails";
import "./UserCoinSpace.css";
import { priceFunc } from "../../priceFunc";

export const UserCoinSpace = (props) => {
  const [buyDetails, setBuyDetails] = useState([]);
  const [newBuyDetails, setNewBuyDetails] = useState({});
  const mainPortfolio = props.mainPortfolio;
  const userPortfolio = props.userPortfolio;

  const buyData = async (id) => {
    if (!mainPortfolio.id) {
      return null;
    } else {
      const buyData = await getBuyDetails(id);
      console.log(buyData.response);
      setBuyDetails(buyData.response);
    }
  };

  useEffect(() => {
    if (!mainPortfolio.id) {
      console.log("Portfolio Loading...");
    } else {
      buyData(mainPortfolio.id);
    }
  }, [mainPortfolio.id, newBuyDetails]);

  return (
    <div className="UserCoinSpace">
      <CoinCardUserMenu />
      {!buyDetails ? null : buyDetails.length > 0 ? (
        buyDetails.map((item, index) => (
          <CoinCardUser
            key={index}
            ticker={item.symbol}
            logo={item.logo}
            price={item.quote.USD.price}
            buyPrice={item.coinDetails.buyPrice}
            qty={item.coinDetails.qty}
            mainPortfolio={mainPortfolio}
            coinId={item.id}
            symbol={item.symbol}
            setNewBuyDetails={setNewBuyDetails}
            newBuyDetails={newBuyDetails}
          />
        ))
      ) : (
        <h1>LOADING...</h1>
      )}
    </div>
  );
};
