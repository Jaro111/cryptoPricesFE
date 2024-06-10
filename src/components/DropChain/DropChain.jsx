import React from "react";
import { useState } from "react";
import { ChainList } from "../ChainList/ChainList";
import "./DropChain.css";

export const DropChain = (props) => {
  const [isdropChainVisible, setDropChainVisible] = useState(false);

  const chains = props.coin.meta.contractAdress;

  const handleDropEnter = () => {
    setDropChainVisible(true);
    console.log(props.coin);
  };

  const handleDropLeave = () => {
    setDropChainVisible(false);
  };

  return (
    <div
      className="chainMenu"
      onClick={handleDropEnter}
      onMouseLeave={handleDropLeave}
    >
      <button className="dropCahinBtn">
        &emsp;
        {">"}
        &emsp;
      </button>
      {isdropChainVisible && <ChainList chains={chains} />}
    </div>
  );
};
