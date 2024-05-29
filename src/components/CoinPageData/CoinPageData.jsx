import React, { useEffect } from "react";
import { getSingleCoin } from "../../utils/utils";
import { useState, useContext } from "react";
import { alertContext } from "../../common/contexts";
import { priceFunc } from "../../priceFunc";
import { getPortfolio } from "../../utilsUser/portfolio/portfolioFunctions";
import { addCoinToPortfolio } from "../../utilsUser/coin/coinFunctions";
import "./CoinPageData.css";
import { DropMenu } from "../DropDownMenu/DropDownMenu";
import { DropChain } from "../DropChain/DropChain";
import { AddCoinPortModal } from "../AddCoinPortModal/AddCoinPortModal";
import { cutUrl } from "../../common/functionsJs";
import { IoWallet } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa";

export const CoinPageData = (props) => {
  const id = props.id;
  const user = props.user;
  const [clickList, setClickList] = useState();
  const [coin, setCoin] = useState([]);
  const setIsAlertOpen = useContext(alertContext).setIsAlertOpen;
  const setAlertMessage = useContext(alertContext).setAlertMessage;
  const [isAddPortModalVisible, setIsAddPortModalVisible] = useState(false);
  const [portfolioList, setPortfolioList] = useState([]);
  const notLogMessageP =
    "If You wold like to create a Portfolio You need to Log In. If You don't have an account You Can Sign In. It takes 1 minute 😉";
  const notLogMessageW =
    "If You wold like to create a Watch List You need to Log In. If You don't have an account You Can Sign In. It takes 1 minute 😉";

  useEffect(() => {
    singleCoinData(id);
  }, [id]);

  const singleCoinData = async (id) => {
    const data = await getSingleCoin(id);
    setCoin(data);
  };

  const clickDrop = (list) => {
    setClickList(list);
  };

  const portfolioClick = async () => {
    if (!user.username) {
      setIsAlertOpen(true);
      setAlertMessage(notLogMessageP);
    } else {
      setIsAddPortModalVisible(true);
      const data = await getPortfolio(user.id);
      console.log(data.portfolios);
      setPortfolioList(data.portfolios);
    }
  };

  const addToWatchList = () => {
    if (!user.username) {
      setIsAlertOpen(true);
      setAlertMessage(notLogMessageW);
      console.log("add to Watchlist");
    } else {
      console.log("add to Watchlist");
    }
  };

  return (
    <div className="coinDataSpace">
      {Object.keys(coin).length > 0 ? (
        <div className="dataContainer">
          <div className="coinNav">
            <div className="logoSpace">
              <img className="coinLogoData" src={coin.logo}></img>
              <div className="priceContContainer">
                <p className="nameCont">{coin.name}</p>
              </div>
            </div>

            <div className="priceSpace">
              <p className="priceContData">
                $ {priceFunc(coin.quote.USD.price)}
              </p>
            </div>
          </div>
          <div className="detailContainer">
            <div className="coinDetails">
              <div className="capSupplyVol">
                <div className="coinDetailsContainer">
                  <p className="coinDetailsContentQ">Symbol: </p>
                  <p className="coinDetailsContentQ">Market Cap: </p>
                  <p className="coinDetailsContentQ">FDV: </p>
                  <p className="coinDetailsContentQ">24 hours Volume: </p>
                  <p className="coinDetailsContentQ">Total Supply: </p>
                  <p className="coinDetailsContentQ">Max Supply: </p>
                  <p className="coinDetailsContentQ">Circulating Supply: </p>
                </div>
                <div className="coinDetailsContainer">
                  <p className="coinDetailsContentA">{coin.symbol}</p>
                  <p className="coinDetailsContentA">
                    ${priceFunc(coin.quote.USD.market_cap)}
                  </p>
                  <p className="coinDetailsContentA">
                    ${priceFunc(coin.quote.USD.fully_diluted_market_cap)}
                  </p>
                  <p className="coinDetailsContentA">
                    ${priceFunc(coin.quote.USD.volume_24h)}
                  </p>
                  <p className="coinDetailsContentA">{coin.total_supply}</p>

                  <p className="coinDetailsContentA">{coin.circ_supply}</p>
                  <p className="coinDetailsContentA">
                    {coin.supply === null ? "ထ" : coin.supply}
                  </p>
                </div>
              </div>

              <div className="capSupplyVol">
                <div className="coinDetailsContainer">
                  <p className="coinDetailsContentQ">Expolorer: </p>
                  <p className="coinDetailsContentQ">Website: </p>
                  {coin.meta.urls.twitter.length > 0 ? (
                    <p className="coinDetailsContentQ">twitter: </p>
                  ) : null}
                  {coin.meta.contractAdress.length > 0 ? (
                    <p className="coinDetailsContentQ">Contract address: </p>
                  ) : null}
                  <p className="coinDetailsContentQ">Add to portfolio </p>
                  <p className="coinDetailsContentQ">Add to watchlist </p>
                </div>
                <div className="coinDetailsContainer">
                  {coin.meta.urls.explorer.length > 1 ? (
                    <DropMenu
                      clickDrop={() => clickDrop(coin.meta.urls.explorer)}
                      clickList={clickList}
                    />
                  ) : (
                    <a
                      className="websiteLink"
                      href={coin.meta.urls.explorer}
                      target="_blank"
                    >
                      <p className="coinDetailsContentA">
                        {cutUrl(`${coin.meta.urls.explorer}`)}
                      </p>
                    </a>
                  )}
                  {coin.meta.urls.website.length > 1 ? (
                    <DropMenu
                      clickDrop={() => clickDrop(coin.meta.urls.website)}
                      clickList={clickList}
                    />
                  ) : (
                    <a
                      className="websiteLink"
                      href={coin.meta.urls.website}
                      target="_blank"
                    >
                      <p className="coinDetailsContentA">
                        {cutUrl(`${coin.meta.urls.website}`)}
                      </p>
                    </a>
                  )}

                  {coin.meta.urls.twitter.length > 0 ? (
                    <p className="coinDetailsContentA">
                      {coin.meta.urls.twitter}
                    </p>
                  ) : null}

                  {coin.meta.contractAdress.length > 0 ? (
                    <DropChain coin={coin} />
                  ) : null}
                  <div className="addButtonsContainer">
                    <button className="addButton">
                      <IoWallet onClick={() => portfolioClick()} />
                    </button>
                    <button>
                      <FaRegStar
                        className="addButton"
                        onClick={() => addToWatchList()}
                      />
                    </button>
                    {isAddPortModalVisible && (
                      <AddCoinPortModal
                        setIsAddPortModalVisible={setIsAddPortModalVisible}
                        portfolioList={portfolioList}
                        user={user}
                        id={id}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="links"></div>
          </div>
        </div>
      ) : (
        <p className="load">Loading ... </p>
      )}
    </div>
  );
};
