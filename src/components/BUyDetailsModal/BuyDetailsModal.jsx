import React, { useEffect, useState } from "react";
import { RiCloseLine } from "react-icons/ri";
import { updateCoinDetails } from "../../utilsUser/coin/coinFunctions";
import "./BuyDetailsModal.css";

export const BuyDetailsModal = (props) => {
  const [buyPrice, setBuyPrice] = useState(0);
  const [qty, setQty] = useState(0);

  const mainPortfolio = props.mainPortfolio;

  const changeHandler = (e, setter, state) => {
    setter(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const details = await updateCoinDetails(
      props.coinId,
      props.mainPortfolio.id,
      buyPrice,
      qty
    );

    props.setNewBuyDetails(details);
    props.setIsBuyDetailsModalVisible(false);
  };

  return (
    <div className="BuyDetailsModalContainer">
      <div className="closeBuyDetailsModal">
        <RiCloseLine onClick={() => props.setIsBuyDetailsModalVisible(false)} />
      </div>
      <div className="updateBuyDetailsModalContainer">
        <form className="BuyDetailsModalForm" onSubmit={handleSubmit}>
          <div className="qtyBuyDetailsContainer">
            <p></p>
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
