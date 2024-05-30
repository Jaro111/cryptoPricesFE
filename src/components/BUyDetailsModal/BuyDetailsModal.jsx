import React, { useState } from "react";
import { RiCloseLine } from "react-icons/ri";
import "./BuyDetailsModal.css";

export const BuyDetailsModal = (props) => {
  return (
    <div className="BuyDetailsModalContainer">
      <div className="closeBuyDetailsModal">
        <RiCloseLine onClick={() => props.setIsBuyDetailsModalVisible(false)} />
      </div>
      <div className="updateBuyDetailsModalContainer">
        <form className="BuyDetailsModalForm">
          <p>Buy Price</p>
          <input className="inputBuyDetailsModal" placeholder="blabla"></input>
          <p>Qty</p>
          <input className="inputBuyDetailsModal" placeholder="blabla"></input>

          <button type="submit">Confirm</button>
        </form>
      </div>
    </div>
  );
};
