import React, { useState } from "react";
import { priceFunc } from "../../priceFunc";
import { FaPlusSquare } from "react-icons/fa";
import { BuyDetailsModal } from "../BUyDetailsModal/BuyDetailsModal";
import "./CoinCardUser.css";

export const CoinCardUser = (props) => {
  const [isbuyDetailsModalVisible, setIsBuyDetailsModalVisible] =
    useState(false);

  const openBuyDetailsModal = () => {
    setIsBuyDetailsModalVisible(true);
  };
  return (
    <div className="CoinCardUser">
      <div className="tickerUserDiv">
        <div className="tickerContentContainer">
          <p className="tickerUserCont">{props.ticker}</p>
        </div>

        <div className="logoUserContainer">
          <img className="coinUserLogo" src={props.logo}></img>
        </div>
      </div>
      <div className="priceUserContainer">
        <p className="priceUserContent">
          {typeof props.price === "number"
            ? priceFunc(props.price)
            : props.price}
        </p>
      </div>

      <div className="userHoldingsDetails">
        <FaPlusSquare
          onClick={openBuyDetailsModal}
          className="addBuyDetailsIcon"
        />
        <div className="userCoinHoldings">
          <p className="holdingsContent"></p>
        </div>
        <div className="userCoinQty">
          <p className="holdingsContent">ddd</p>
        </div>
      </div>
      {isbuyDetailsModalVisible && (
        <BuyDetailsModal
          setIsBuyDetailsModalVisible={setIsBuyDetailsModalVisible}
        />
      )}
    </div>
  );
};
