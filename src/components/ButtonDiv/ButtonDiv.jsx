import React from "react";
import { useState } from "react";
import "./ButtonDiv.css";

//

export const ButtonDiv = (props) => {
  return (
    <div className="buttonsContainer">
      <div>
        <button
          className="button1h"
          onClick={props.change1HClick}
          change1h={props.change1h}
          style={{
            backgroundColor:
              props.change1h === "false" ? "rgb(0, 0, 0)" : "rgb(25, 243, 36)",
            color: props.change1h === "false" ? "white" : "black",
          }}
        >
          1H
        </button>
        <button
          onClick={props.change24HClick}
          className="button24h"
          change1h={props.change24h}
          style={{
            backgroundColor:
              props.change24h === "false" ? "rgb(0, 0, 0)" : "rgb(25, 243, 36)",
            color: props.change24h === "false" ? "white" : "black",
          }}
        >
          24H
        </button>
        <button
          onClick={props.change7DClick}
          className="button7d"
          change1h={props.change7d}
          style={{
            backgroundColor:
              props.change7d === "false" ? "rgb(0, 0, 0)" : "rgb(25, 243, 36)",
            color: props.change7d === "false" ? "white" : "black",
          }}
        >
          7D
        </button>
        <button
          onClick={props.change30DClick}
          className="button30d"
          change1h={props.change30d}
          style={{
            backgroundColor:
              props.change30d === "false" ? "rgb(0, 0, 0)" : "rgb(25, 243, 36)",
            color: props.change30d === "false" ? "white" : "black",
          }}
        >
          30D
        </button>
      </div>
    </div>
  );
};
