import React, { useState } from "react";
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
        <p className="priceContent">
          {props.price > 0.1
            ? Math.round(props.price * 100) / 100
            : Math.round(props.price * 10 ** 10) / 10 ** 8}{" "}
          $
        </p>
        <p className="priceChnges">{Math.round(props.pChange24 * 10) / 10} %</p>
      </div>
    </button>
  );
};
