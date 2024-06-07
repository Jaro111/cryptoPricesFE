import React from "react";
import { useEffect, useState } from "react";
import { CoinCardUser } from "../CoinCardUser/CoinCardUser";
import { CoinCardUserMenu } from "../CoinCardUserMenu/CoinCardUserMeny";
import { PortfolioChart } from "../PortfolioChart/PortfolioChart";
import { getBuyDetails } from "../../utilsUser/buyDetails/buyDetails";
import "./UserCoinSpace.css";
import { priceFunc } from "../../priceFunc";
import { alertContext } from "../../common/contexts";

export const UserCoinSpace = (props) => {
  const [buyDetails, setBuyDetails] = useState([]);
  const [newBuyDetails, setNewBuyDetails] = useState({});
  const [deleteMessage, setDeleteMessage] = useState("");
  const [portfolioValue, setPortfolioValue] = useState(0);
  const [chartData, setChartData] = useState([]);
  const mainPortfolio = props.mainPortfolio;
  const userPortfolio = props.userPortfolio;

  // const colorFunc = (val) => {
  //   if (val === 1) {
  //     return "rgb(1, 192, 0)";
  //   } else if (val === 2) {
  //     return "rgb(0, 1, 255)";
  //   } else if (val > 2 && val <= 10) {
  //     return "rgb(1, 149, 133)";
  //   } else if (val > 10 && val <= 50) {
  //     return "rgb(83, 125, 26)";
  //   } else if (val > 50 && val <= 100) {
  //     return "rgb(219, 94, 1)";
  //   } else if (val > 100 && val <= 200) {
  //     return "rgb(219, 22, 190)";
  //   } else return "rgb(219, 2, 1)";
  // };

  const randomRgb = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255 + 1);

    const rgb = `rgb(${r}, ${g}, ${b})`;
    return rgb;
  };

  const percentVal = (itemValue) => {
    const value = (itemValue / portfolioValue) * 100;
    const roundVal = Math.round(value * 100) / 100;
    return roundVal;
  };

  const countPortfolioValue = (details) => {
    let value = 0;
    for (let i = 0; i < details.length; i++) {
      value += details[i].coinDetails.qty * details[i].quote.USD.price;
    }
    const roundVal = Math.round(value * 100) / 100;
    setPortfolioValue(roundVal);
  };

  const chartDataFunc = (details) => {
    let data = [];
    details.map((item) => {
      if (item.coinDetails.qty > 0) {
        data.push({
          value: Math.round(item.coinDetails.qty * item.quote.USD.price),
          percentValue: percentVal(item.coinDetails.qty * item.quote.USD.price),
          valueString: `${Math.round(
            item.coinDetails.qty * item.quote.USD.price
          )}$`,
          symbol: item.symbol,
          color: randomRgb(),
        });
      }
    });
    console.log("chartData");
    setChartData(data);
  };

  const buyData = async (id) => {
    if (!mainPortfolio.id) {
      return null;
    } else {
      const buyData = await getBuyDetails(id);
      const data = buyData.response;
      console.log("Portfolio coins");
      console.log(data);
      if (!data) {
        await setBuyDetails(null);
      } else {
        await setBuyDetails(data);
        await countPortfolioValue(data);
        await chartDataFunc(data);
      }
    }
  };

  useEffect(() => {
    if (!mainPortfolio.id) {
      console.log("Portfolio Loading...");
    } else {
      buyData(mainPortfolio.id);
      console.log(mainPortfolio);
    }
  }, [mainPortfolio.id, newBuyDetails, portfolioValue, deleteMessage]);

  return (
    <div className="UserCoinSpace">
      <div className="userCardSpace">
        <CoinCardUserMenu />
        {!buyDetails ? null : buyDetails.length > 0 ? (
          buyDetails.map((item, index) => (
            <CoinCardUser
              key={index}
              ticker={item.symbol}
              logo={item.logo}
              price={item.quote.USD.price}
              buyPrice={item.coinDetails.buyPrice}
              qty={item.coinDetails.qty}
              mainPortfolio={mainPortfolio}
              coinId={item.id}
              symbol={item.symbol}
              setNewBuyDetails={setNewBuyDetails}
              newBuyDetails={newBuyDetails}
              deleteMessage={deleteMessage}
              setDeleteMessage={setDeleteMessage}
            />
          ))
        ) : (
          <h1>LOADING...</h1>
        )}
      </div>

      <div className="chartPortfolioSpace">
        {chartData.length > 0 ? (
          <PortfolioChart
            chartData={chartData}
            portfolioValue={portfolioValue}
          />
        ) : null}
      </div>
    </div>
  );
};
