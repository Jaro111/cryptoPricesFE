import React from "react";
import { useState } from "react";
import { priceFunc } from "../../priceFunc";
import "./CoinPageData.css";
import { DropMenu } from "../DropDownMenu/DropDownMenu";

export const CoinPageData = (props) => {
  const coin = props.coin;
  const [clickList, setClickList] = useState();

  const clickDrop = (list) => {
    console.log("clidk DROP");
    setClickList(list);
    console.log("lenght", coin.meta.urls.website.length);
  };

  return (
    <div className="coinDataSpace">
      <div className="dataContainer">
        <div className="coinNav">
          <div className="logoSpace">
            <img className="coinLogoData" src={coin.logo}></img>
            <div className="priceContContainer">
              <p className="nameCont">{coin.name}</p>
            </div>
          </div>

          <div className="priceSpace">
            <p className="priceContData">$ {priceFunc(coin.quote.USD.price)}</p>
          </div>
        </div>
        <div className="detailContainer">
          <div className="coinDetails">
            <div className="capSupplyVol">
              <div className="coinDetailsContainer">
                <p className="coinDetailsContentQ">Symbol:</p>
                <p className="coinDetailsContentQ">Market Cap:</p>
                <p className="coinDetailsContentQ">FDV:</p>
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
                <p className="coinDetailsContentA">
                  {coin.supply === null ? "ထ" : coin.supply}
                </p>
                <p className="coinDetailsContentA">{coin.circ_supply}</p>
              </div>
            </div>

            <div className="capSupplyVol">
              <div className="coinDetailsContainer">
                <p className="coinDetailsContentQ">Expolorer:</p>
                <p className="coinDetailsContentQ">Website:</p>
                <p className="coinDetailsContentQ">twitter:</p>
                <p className="coinDetailsContentQ">Contract address:</p>
              </div>
              <div className="coinDetailsContainer">
                {coin.meta.urls.explorer.length > 1 ? (
                  <DropMenu
                    clickDrop={() => clickDrop(coin.meta.urls.explorer)}
                    clickList={clickList}
                  />
                ) : (
                  <p className="coinDetailsContentA">
                    {coin.meta.urls.explorer}
                  </p>
                )}
                {coin.meta.urls.website.length > 1 ? (
                  <DropMenu
                    clickDrop={() => clickDrop(coin.meta.urls.website)}
                    clickList={clickList}
                  />
                ) : (
                  <p className="coinDetailsContentA">
                    {coin.meta.urls.website}
                  </p>
                )}

                <p className="coinDetailsContentA">{coin.meta.urls.twitter}</p>
                <p className="coinDetailsContentA">blabla</p>
                <p className="coinDetailsContentA">blabla</p>
              </div>
            </div>
          </div>
          <div className="links"></div>
        </div>
      </div>
    </div>
  );
};