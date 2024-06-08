import React from "react";
import { useState, useEffect } from "react";
import "./PortfolioBar.css";

export const PortfolioBar = (props) => {
  const [isPortfolioDropVisible, setIsPortfolioDropVisible] = useState(false);

  const mainPortfolioFunc = (item) => {
    props.setMainPortfolio(item);
  };

  useEffect(() => {});

  return (
    <div
      className="porfolioMenu"
      onMouseLeave={() => setIsPortfolioDropVisible(false)}
    >
      <div className="portfolioMenuButtons">
        <button onClick={props.showUpdatePortfolioModal}>
          {Object.keys(props.mainPortfolio).length > 0
            ? props.mainPortfolio.title
            : props.userPortfolio[0].title}
        </button>
        {props.userPortfolio.length > 1 && (
          <button onClick={() => setIsPortfolioDropVisible(true)}>{">"}</button>
        )}
      </div>

      {props.userPortfolio.length > 1 && isPortfolioDropVisible && (
        <ul className="portfolioList">
          {props.userPortfolio.map((item, index) => (
            <li
              onClick={() => mainPortfolioFunc(item)}
              key={index}
              className="portfolioListItem"
            >
              {item.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
