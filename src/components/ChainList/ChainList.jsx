import React from "react";
import "./ChainList.css";
import { cropText } from "../../common/functionsJs";
import { MdContentCopy } from "react-icons/md";

export const ChainList = (props) => {
  //
  const copy = async (textToCopy) => {
    console.log(textToCopy);
    if ("clipboard" in navigator) {
      await navigator.clipboard.writeText(textToCopy);
    } else {
      document.execCommand("copy", true, textToCopy);
    }
  };
  const listOfChains = props.chains.map((item, index) => (
    <li className="listChainContent" key={index}>
      <p className="addressTickerCont">{item.platform.coin.symbol}</p>
      <p className="addressCont">{cropText(item.contract_address, 5, 5)}</p>
      <MdContentCopy
        className="copy"
        onClick={() => {
          copy(item.contract_address);
        }}
      />
    </li>
  ));
  return <ul className="chainList">{listOfChains}</ul>;
};
