import React, { useState } from "react";
import { RiCloseLine } from "react-icons/ri";
import "./BuyDetailsModal.css";
import { updateBuyDetails } from "../../utilsUser/coin/coinFunctions";

export const BuyDetailsModal = (props) => {
  const [buyPrice, setBuyPrice] = useState(0);
  const [qty, setQty] = useState(0);
  const mainPortfolio = props.mainPortfolio;

  const changeHandler = (e, setter, state) => {
    let typing = e.target.value;
  };

  const handleSubmit = async () => {
    e.preventDefault();
  };

  return (
    <div className="BuyDetailsModalContainer">
      <div className="closeBuyDetailsModal">
        <RiCloseLine onClick={() => props.setIsBuyDetailsModalVisible(false)} />
      </div>
      <div className="updateBuyDetailsModalContainer">
        <form className="BuyDetailsModalForm" onSubmit={handleSubmit}>
          <div className="qtyBuyDetailsContainer">
            <p>{props.clickSymbol.length > 0 ? props.clickSymbol : null}</p>
            <p>Buy Price</p>
            <input
              className="inputBuyDetailsModal"
              placeholder="Buy Price"
              onChange={(e) => changeHandler(e, setBuyPrice, buyPrice)}
            ></input>
          </div>
          <div className="priceBuyDetailsContainer">
            <p>Qty</p>
            <input
              className="inputBuyDetailsModal"
              placeholder="qty"
              onChange={(e) => changeHandler(e, setQty, qty)}
            ></input>
          </div>

          <button type="submit">Confirm</button>
        </form>
      </div>
    </div>
  );
};
