import React from "react";
import { getPortfolio } from "../../utilsUser/portfolio/portfolioFunctions";
import { addPortfolio } from "../../utilsUser/portfolio/portfolioFunctions";
import { useState, useEffect } from "react";
import "./PortfolioSpace.css";
import { FaPlusSquare } from "react-icons/fa";
import { PortfolioBar } from "../PortfolioBar/PortfolioBar";
import { PortfolioUpdateModal } from "../PortfolioUpdateModal/PortfolioUpdateModal";
import { UserCoinSpace } from "../UserCoinSpace/UserCoinSpace";

export const PortfolioSpace = (props) => {
  const [userPortfolio, setUserportfolio] = useState([]);
  const [mainPortfolio, setMainPortfolio] = useState({});
  const [portfolioLength, setPortfolioLength] = useState(0);
  const [newPortfolio, setNewPortfolio] = useState({});
  const [isUpdateModalVisible, setIsupdateModalVisible] = useState(false);
  const [deletePortfolioMessage, setDeletePortfolioMessage] = useState("");

  // const [userCoins, setUserCoins] = useState([]);
  const user = props.user;

  const getUserPortfolio = async (user) => {
    const portfolio = await getPortfolio(user.id);
    await setUserportfolio(portfolio);
    await setPortfolioLength(userPortfolio.length);
    if (userPortfolio.length === 1) {
      await setMainPortfolio(userPortfolio[0]);
    }
    if (Object.keys(mainPortfolio).length === 0) {
      await setMainPortfolio(portfolio[0]);
    }
  };

  const addPortfolioFunc = async (user) => {
    const add = await addPortfolio(user.id);
    console.log(add);
    setNewPortfolio(add);
  };

  const showUpdatePortfolioModal = () => {
    setIsupdateModalVisible(true);
  };
  useEffect(() => {
    getUserPortfolio(user);
  }, [
    mainPortfolio.title,
    isUpdateModalVisible,
    newPortfolio,
    mainPortfolio.id,
  ]);

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
            deletePortfolioMessage={deletePortfolioMessage}
            setDeletePortfolioMessage={setDeletePortfolioMessage}
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
          user={user}
          userPortfolio={userPortfolio}
          setMainPortfolio={setMainPortfolio}
          mainPortfolio={mainPortfolio}
          deletePortfolioMessage={deletePortfolioMessage}
          setDeletePortfolioMessage={setDeletePortfolioMessage}
        />
      )}

      <UserCoinSpace
        user={user}
        mainPortfolio={mainPortfolio}
        setMainPortfolio={setMainPortfolio}
        userPortfolio={userPortfolio}
      />
    </div>
  );
};
