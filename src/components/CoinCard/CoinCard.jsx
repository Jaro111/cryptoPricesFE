import React, { useState } from "react";
import { priceFunc } from "../../priceFunc";
import "./coinCard.css";

export const CoinCard = (props) => {
  const colorFunc = (value) => {
    if (Math.round(value) > 0) {
      return "rgb(25, 243, 36)";
    } else {
      return "red";
    }
  };
  return (
    <button
      className="coinButton"
      style={{
        backgroundColor: colorFunc(props.pChange24),
      }}
      onClick={props.clickCoin}
    >
      <div className="CoinCard">
        <img className="coinLogo" src={props.logo}></img>
        <p className="rankCont">{props.rank}</p>
        <p className="tickerCont">{props.ticker}</p>
        <p className="priceContent">${priceFunc(props.price)}</p>
        <p className="priceChnges">
          {Math.round(props.pChange24 * 100) / 100} %
        </p>
      </div>
    </button>
  );
};
