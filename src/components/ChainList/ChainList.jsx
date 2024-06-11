import React from "react";
import "./ChainList.css";
import { useState } from "react";
import { copy } from "../../common/functionsJs";
import { cropText } from "../../common/functionsJs";
import { clickCopyStyle } from "../../common/functionsJs";
import { MdContentCopy } from "react-icons/md";
import { color } from "chart.js/helpers";

export const ChainList = (props) => {
  const [clickedCcolor, setClickedColor] = useState("greenyellow");
  const [indexState, setIndexState] = useState(null);

  const copyFunc = (item, index) => {
    copy(item.contract_address);
    setIndexState(index);
    setTimeout(() => {
      setIndexState(null);
    }, 300);
  };
  //
  const listOfChains = props.chains.map((item, index) => (
    <li className="listChainContent" key={index}>
      <p className="addressTickerCont">{item.platform.coin.symbol}</p>
      <p className="addressCont">{cropText(item.contract_address, 5, 5)}</p>
      <MdContentCopy
        style={
          indexState === index ? { color: clickedCcolor } : { color: "black" }
        }
        className="copy"
        id={index}
        key={index}
        onClick={() => {
          copyFunc(item, index);
        }}
      />
    </li>
  ));
  return <ul className="chainList">{listOfChains}</ul>;
};
