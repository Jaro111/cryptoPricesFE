import React, { useState, useEffect } from "react";
import { priceFunc } from "../../priceFunc";
import { BuyDetailsModal } from "../BUyDetailsModal/BuyDetailsModal";
import { FaPlusSquare } from "react-icons/fa";
import "./CoinCardUser.css";

export const CoinCardUser = (props) => {
  const [isbuyDetailsModalVisible, setIsBuyDetailsModalVisible] =
    useState(false);
  const [symbol, setSymbol] = useState("");
  const [coinId, setCoinId] = useState("");
  const [profit, setProfit] = useState(0);
  const [holdingValue, setHoldingValue] = useState(0);
  const [valueDifference, setValueDifference] = useState(0);

  const mainPortfolio = props.mainPortfolio;
  const setNewBuyDetails = props.setNewBuyDetails;

  const openBuyDetailsModal = () => {
    setIsBuyDetailsModalVisible(true);
    setSymbol(props.symbol);
    setCoinId(props.coinId);
  };

  const profitFunc = () => {
    const currentValue = props.qty * props.price;
    const buyValue = props.qty * props.buyPrice;
    const difference = currentValue - buyValue;
    const profitValue = (difference / buyValue) * 100;
    setHoldingValue(currentValue);
    setValueDifference(difference);
    setProfit(profitValue);
  };

  useEffect(() => {
    profitFunc();
  }, [props.coinId, props.buyPrice, holdingValue, profit, setNewBuyDetails]);

  return (
    <div className="CoinCardUser">
      <div className="cmcContainer">
        <div className="tickerUserDiv">
          <div className="tickerContentContainer">
            <p className="tickerUserCont">{props.ticker}</p>
          </div>

          <div className="logoUserContainer">
            <img src={props.logo} className="coinUserLogo"></img>
          </div>
        </div>
        <div className="priceUserContainer">
          <p className="priceUserContent">{priceFunc(props.price)} $</p>
        </div>
      </div>
      <div className="addPortfolioContainer">
        <FaPlusSquare
          onClick={() => openBuyDetailsModal()}
          className="addBuyDetailsIcon"
        />
      </div>
      {props.buyPrice > 0 && (
        <div className="userHoldingsDetails">
          <div className="userBuyPrice">
            <p className="holdingsContent">{priceFunc(props.buyPrice)} $</p>
          </div>
          <div className="userCoinQty">
            <p className="holdingsContent">{props.qty}</p>
          </div>
          <div className="userHoldingsBuyDetailsProfit">
            <div className="valueDiv">
              <p className="profitContent">{priceFunc(holdingValue)} $</p>
            </div>
            <div className="valueDiv">
              {valueDifference >= 0 ? (
                <p className="profitContent">{priceFunc(valueDifference)} $</p>
              ) : (
                <p className="profitContent">
                  {" "}
                  - {priceFunc(valueDifference * -1)} $
                </p>
              )}
            </div>

            <div className="valueDiv">
              <p
                style={{ color: profit > 0 ? "green" : "red" }}
                className="profitContent"
              >
                {Math.round(profit)} %
              </p>
            </div>
          </div>
        </div>
      )}

      {isbuyDetailsModalVisible && (
        <BuyDetailsModal
          setIsBuyDetailsModalVisible={setIsBuyDetailsModalVisible}
          mainPortfolio={mainPortfolio}
          index={props.index}
          symbol={props.symbol}
          coinId={props.coinId}
          setNewBuyDetails={setNewBuyDetails}
        />
      )}
    </div>
  );
};
