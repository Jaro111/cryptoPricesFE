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
    console.log(data);
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

      setPortfolioList(data);
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
            <div className="coinDescriptionContainer">
              <div className="coinDescriptionSpace">
                <p className="coinDescriptionContent">
                  {" "}
                  {coin.meta.description}
                </p>
              </div>
            </div>
          </div>
          <div className="detailContainer">
            <div className="listDetailContainer">
              <ul className="listCoinDetail">
                <li className="listCoinDetailItem">
                  <div className="listCoinDetailItemContainerQ">
                    <p className="listCoinDetailItemContentQ">Symbol: </p>
                  </div>
                  <div className="listCoinDetailItemContainerA">
                    <p className="listCoinDetailItemContentA">{coin.symbol}</p>
                  </div>
                </li>
                <li className="listCoinDetailItem">
                  <div className="listCoinDetailItemContainerQ">
                    <p className="listCoinDetailItemContentQ">Market Cap: </p>
                  </div>
                  <div className="listCoinDetailItemContainerA">
                    <p className="listCoinDetailItemContentA">
                      ${priceFunc(coin.quote.USD.market_cap)}
                    </p>
                  </div>
                </li>
                <li className="listCoinDetailItem">
                  <div className="listCoinDetailItemContainerQ">
                    <p className="listCoinDetailItemContentQ">FDV: </p>
                  </div>
                  <div className="listCoinDetailItemContainerA">
                    <p className="listCoinDetailItemContentA">
                      ${priceFunc(coin.quote.USD.market_cap)}
                    </p>
                  </div>
                </li>
                <li className="listCoinDetailItem">
                  <div className="listCoinDetailItemContainerQ">
                    <p className="listCoinDetailItemContentQ">
                      24 hours Volume:
                    </p>
                  </div>
                  <div className="listCoinDetailItemContainerA">
                    <p className="listCoinDetailItemContentA">
                      ${priceFunc(coin.quote.USD.volume_24h)}
                    </p>
                  </div>
                </li>
                <li className="listCoinDetailItem">
                  <div className="listCoinDetailItemContainerQ">
                    <p className="listCoinDetailItemContentQ">Total Supply: </p>
                  </div>
                  <div className="listCoinDetailItemContainerA">
                    <p className="listCoinDetailItemContentA">
                      {priceFunc(coin.total_supply)}
                    </p>
                  </div>
                </li>
                <li className="listCoinDetailItem">
                  <div className="listCoinDetailItemContainerQ">
                    <p className="listCoinDetailItemContentQ">Max Supply: </p>
                  </div>
                  <div className="listCoinDetailItemContainerA">
                    <p className="listCoinDetailItemContentA">
                      {coin.supply === null ? "ထ" : coin.supply}
                    </p>
                  </div>
                </li>
                <li className="listCoinDetailItem">
                  <div className="listCoinDetailItemContainerQ">
                    <p className="listCoinDetailItemContentQ">
                      Circulating Supply:{" "}
                    </p>
                  </div>
                  <div className="listCoinDetailItemContainerA">
                    <p className="listCoinDetailItemContentA">
                      {priceFunc(coin.circ_supply)}
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="listDetailContainer">
              <ul className="listCoinDetail">
                <li className="listCoinDetailItem">
                  <div className="listCoinDetailItemContainerQ">
                    <p className="listCoinDetailItemContentQ">Expolorer: </p>
                  </div>
                  <div className="listCoinDetailItemContainerA">
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
                  </div>
                </li>
                <li className="listCoinDetailItem">
                  <div className="listCoinDetailItemContainerQ">
                    {coin.meta.contractAdress.length > 0 ? (
                      <p className="listCoinDetailItemContentQ">
                        Contract address:
                      </p>
                    ) : null}
                  </div>
                  <div className="listCoinDetailItemContainerA">
                    {coin.meta.contractAdress.length > 0 ? (
                      <DropChain coin={coin} />
                    ) : null}
                  </div>
                </li>
                <li className="listCoinDetailItem">
                  <div className="listCoinDetailItemContainerQ">
                    <p className="listCoinDetailItemContentQ">Website: </p>
                  </div>
                  <div className="listCoinDetailItemContainerA">
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
                  </div>
                </li>
                <li className="listCoinDetailItem">
                  <div className="listCoinDetailItemContainerQ">
                    {coin.meta.urls.twitter.length > 0 ? (
                      <p className="listCoinDetailItemContentQ">Twitter: </p>
                    ) : null}
                  </div>
                  <div className="listCoinDetailItemContainerA">
                    {coin.meta.urls.twitter.length > 0 ? (
                      <p className="listCoinDetailItemContentA">
                        {coin.meta.urls.twitter}
                      </p>
                    ) : null}
                  </div>
                </li>

                <li className="listCoinDetailItem">
                  <div className="listCoinDetailItemContainerQ">
                    <p className="listCoinDetailItemContentQ">
                      Add To Portfolio {"->"}
                    </p>
                  </div>
                  <div className="listCoinDetailItemContainerA">
                    <button className="addButton">
                      <IoWallet onClick={() => portfolioClick()} />
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
                </li>

                <li className="listCoinDetailItem">
                  <div className="listCoinDetailItemContainerQ">
                    <p className="listCoinDetailItemContentQ">
                      Add To Watchlist {"->"}
                    </p>
                  </div>
                  <div className="listCoinDetailItemContainerA">
                    <button className="addButton">
                      <FaRegStar
                        className="addButton"
                        onClick={() => addToWatchList()}
                      />
                    </button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="otherContainer">
            <div className="tagsTitleContainer">
              <p className="tagsTitleContent">Tags:</p>
              <div className="coinTagsSpace">
                {coin.tags.map((item, index) => {
                  return (
                    <div key={index}>
                      <p className="coinTagsContent">{item}, </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p className="load">Loading ... </p>
      )}
    </div>
  );
};
