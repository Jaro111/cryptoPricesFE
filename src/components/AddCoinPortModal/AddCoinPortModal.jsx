import React, { useState } from "react";
import "./AddCoinPortModal.css";
import { RiCloseLine } from "react-icons/ri";
import { addCoinToPortfolio } from "../../utilsUser/coin/coinFunctions";

export const AddCoinPortModal = (props) => {
  const closeAddCoinPortModalFunc = () => {
    props.setIsAddPortModalVisible(false);
  };

  const addToPortfolio = async (item) => {
    const addCoin = await addCoinToPortfolio(props.id, props.user.id, item.id);
    console.log(addCoin);
  };
  return (
    <div className="AddCoinPortModalWrapper" content="">
      <div className="AddCoinPortModal">
        <div className="closeAddCoinPortModalSpace">
          <RiCloseLine
            onClick={closeAddCoinPortModalFunc}
            className="closeAddCoinPortModal"
          />
        </div>
        <div className="portfolioListSpace">
          {props.portfolioList.length > 0 ? (
            <>
              <p>Chose portfolio</p>
              <ul className="modalPortfolioListContainer">
                {props.portfolioList.map((item, index) => (
                  <li
                    onClick={() => addToPortfolio(item)}
                    className="modalPortfolioListItem"
                    key={index}
                  >
                    {item.title}
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <p>Loading</p>
          )}
        </div>
      </div>
    </div>
  );
};
