import React from "react";
import { getPortfolio } from "../../utilsUser/portfolio/portfolioFunctions";
import { useState, useEffect } from "react";
import "./PortfolioSpace.css";

export const PortfolioSpace = (props) => {
  const [userPortfolio, setUserportfolio] = useState([]);
  // const [userCoins, setUserCoins] = useState([]);
  const user = props.user;

  const getUserPortfolio = async (user) => {
    const portfolio = await getPortfolio(user.id);
    console.log(portfolio.portfolios);
    setUserportfolio(portfolio.portfolios);
    // const data = await getCoins(user.id);
    // const dataCoins = await getMultipleCoins(data);
    // console.log(dataCoins);
    // setUserCoins(dataCoins);
  };

  useEffect(() => {
    getUserPortfolio(user);
  }, [userPortfolio.length]);

  return (
    <div className="portfolioSpace">
      <div className="portfolioContainer">
        {userPortfolio.length > 0 ? (
          userPortfolio.length === 1 ? (
            <p>{userPortfolio[0].title}</p>
          ) : (
            <p>LOnger</p>
          )
        ) : (
          <p>Loading...</p>
        )}
        <p></p>
      </div>
      <div className="userCoinsSpace"></div>
    </div>
  );
};
