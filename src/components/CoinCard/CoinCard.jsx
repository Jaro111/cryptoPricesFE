import React, { useState } from "react";
import { priceFunc } from "../../priceFunc";
import "./coinCard.css";
import { IoWallet } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa";

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
      <div className="tickerDiv" onClick={props.clickCoin}>
        <div className="tickerContainer">
          <p className="rankCont"></p>
          <p className="tickerCont">
            {props.rank}. {props.ticker}
          </p>
        </div>
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
    </div>
  );
};
