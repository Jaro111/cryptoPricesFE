import React from "react";
import { getCoins } from "../../utilsUser/coin/coinFunctions";
import { getMultipleCoins } from "../../utils/utils";
import { CoinCard } from "../CoinCard/CoinCard";
import { useState, useEffect } from "react";
import "./PortfolioSpace.css";
import { MdConstruction } from "react-icons/md";

export const PortfolioSpace = (props) => {
  const [userCoins, setUserCoins] = useState([]);
  const user = props.user;

  const getUserCoins = async (user) => {
    console.log(user);
    const data = await getCoins(user.id);
    const dataCoins = await getMultipleCoins(data);
    console.log(dataCoins);
    setUserCoins(dataCoins);
  };

  useEffect(() => {
    getUserCoins(user);
  }, [user]);

  return <div className="userCoinsSpace"></div>;
};
