import React from "react";
import { useLocation } from "react-router-dom";
import { CoinPageData } from "../components/CoinPageData/CoinPageData";

export const CoinPage = ({ user }) => {
  const location = useLocation();
  const id = location.state;
  return <CoinPageData id={id} user={user} />;
};
