import React from "react";
import { useLocation } from "react-router-dom";

export const CoinPage = () => {
  const location = useLocation();
  const coin = location.state;
  return (
    <>
      <p>Coin page bla bla</p>
      <p>Oleole</p>
      <p>Symbol: {coin.symbol}</p>
    </>
  );
};
