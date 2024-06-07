import React, { useEffect, useState } from "react";
import { RiCloseLine } from "react-icons/ri";
import { deleteBuyDetails } from "../../utilsUser/buyDetails/buyDetails";
import "./DeleteCoinPortfolioModal.css";

export const DeleteCoinPortfolioModal = (props) => {
  const deleteCoin = async () => {
    const delCoin = await deleteBuyDetails(
      props.mainPortfolio.id,
      props.coinId
    );
    console.log(delCoin);
    props.setDeleteMessage(delCoin.message);
    setTimeout(() => {
      props.setIsDeleteCoinPOrtfolioModalVisible(false);
    }, 2000);
  };
  useEffect(() => {
    props.setDeleteMessage("");
  }, [props.setIsDeleteCoinPOrtfolioModalVisible]);

  return (
    <div className="DeleteCoinPortfolioModal">
      <div className="closeButtonSpace">
        <RiCloseLine
          onClick={() => props.setIsDeleteCoinPOrtfolioModalVisible(false)}
        />
      </div>
      <div className="conirmDeleteContainer">
        <div className="ConfirmContentSpace">
          <p>Are You sure?</p>
        </div>

        <div className="ConfirmBtnSpace">
          <button onClick={deleteCoin} className="conirmDeleteBtn">
            Confirm
          </button>
          <p>{props.deleteMessage}</p>
        </div>
      </div>
    </div>
  );
};
