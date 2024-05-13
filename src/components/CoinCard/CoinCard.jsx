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
    <div className="CoinCard">
      <button className="coinButton" onClick={props.clickCoin}>
        <div className="tickerDiv">
          {/* <p className="rankCont"></p> */}
          <p className="tickerCont">
            {props.rank}. {props.ticker}
          </p>
          <img className="coinLogo" src={props.logo}></img>
        </div>

        <div
          className="colorDiv"
          style={{
            backgroundColor: colorFunc(props.pChange24),
          }}
        >
          <p className="priceContent">${priceFunc(props.price)}</p>
          <p className="priceChnges">
            {Math.round(props.pChange24 * 100) / 100}%
          </p>
        </div>
      </button>
    </div>
  );
};
