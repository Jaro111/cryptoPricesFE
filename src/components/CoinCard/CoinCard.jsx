import React, { useEffect } from "react";
import "./coinCard.css";

export const CoinCard = (props) => {
  const click = () => {
    console.log(click);
  };

  const colorFunc = (value) => {
    if (Math.round(value) > 0) {
      return "rgb(25, 243, 36)";
    } else if (value === 0) {
      return "grey";
    } else {
      return "red";
    }
  };
  return (
    <button
      className="coinButton"
      style={{
        backgroundColor: colorFunc(props.pChange24),
        // props.pChange24 > 0 || props.pChange24 === 0
        //   ? "rgb(59, 253, 0)"
        //   : "red",
      }}
      onClick={() => click()}
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

// fully_diluted_market_cap: 1292468039922.19;
// last_updated: "2024-05-03T15:12:00.000Z";
// market_cap: 1212057448548.9133;
// market_cap_dominance: 52.9892;
// percent_change_1h: -0.16809346;
// percent_change_7d: -3.31939919;
// percent_change_24h: 3.9397746;
// percent_change_30d: -7.31761835;
// percent_change_60d: -7.10609625;
// percent_change_90d: 43.48389568;
// price: 61546.09713915174;
// tvl: null;
// volume_24h: 31571922554.961452;
// volume_change_24h: -23.6303;
