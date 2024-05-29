import React from "react";
import { getPortfolio } from "../../utilsUser/portfolio/portfolioFunctions";
import { addPortfolio } from "../../utilsUser/portfolio/portfolioFunctions";
import { useState, useEffect } from "react";
import "./PortfolioSpace.css";
import { FaPlusSquare } from "react-icons/fa";
import { PortfolioBar } from "../PortfolioBar/PortfolioBar";
import { PortfolioUpdateModal } from "../PortfolioUpdateModal/PortfolioUpdateModal";

export const PortfolioSpace = (props) => {
  const [userPortfolio, setUserportfolio] = useState([]);
  const [mainPortfolio, setMainPortfolio] = useState({});
  const [portfolioLength, setPortfolioLength] = useState(0);
  const [isUpdateModalVisible, setIsupdateModalVisible] = useState(false);
  const [newPortfolioName, setNewPortfolioName] = useState("");

  // const [userCoins, setUserCoins] = useState([]);
  const user = props.user;

  const getUserPortfolio = async (user) => {
    const portfolio = await getPortfolio(user.id);
    console.log(portfolio.length);
    setUserportfolio(portfolio);
    if (userPortfolio.length === 1) {
      setMainPortfolio(userPortfolio[0]);
    }
  };

  const addPortfolioFunc = async (user) => {
    console.log("blabla addd");
  };

  const showUpdatePortfolioModal = () => {
    setIsupdateModalVisible(true);
  };
  useEffect(() => {
    getUserPortfolio(user);
  }, []);

  return (
    <div className="portfolioSpace">
      <div className="portfolioContainer">
        <div className="leftPportfolio"></div>
        {}

        {userPortfolio.length > 0 ? (
          <PortfolioBar
            userPortfolio={userPortfolio}
            mainPortfolio={mainPortfolio}
            setMainPortfolio={setMainPortfolio}
            showUpdatePortfolioModal={() => showUpdatePortfolioModal()}
          />
        ) : (
          <p>Lodaing...</p>
        )}
        <FaPlusSquare
          onClick={() => addPortfolioFunc(user)}
          className="addPortfolioButton"
        />
      </div>
      {isUpdateModalVisible && (
        <PortfolioUpdateModal
          setIsupdateModalVisible={setIsupdateModalVisible}
        />
      )}

      <div className="userCoinsSpace"></div>
    </div>
  );
};
