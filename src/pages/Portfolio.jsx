import React from "react";
import { PortfolioSpace } from "../components/PortfolioSpace/PortfolioSpace";
import { useLocation } from "react-router-dom";

export const Portfolio = () => {
  const location = useLocation();
  const user = location.state;
  return <PortfolioSpace user={user} />;
};

export default Portfolio;
