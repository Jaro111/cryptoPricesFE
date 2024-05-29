import React, { useState } from "react";
import "./PortfolioUpdateModal.css";
import { RiCloseLine } from "react-icons/ri";
import { renamePortfolio } from "../../utilsUser/portfolio/portfolioFunctions";

export const PortfolioUpdateModal = (props) => {
  const changeHandler = (e) => {
    const newName = e.target.value;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="PortfolioUpdateModalContainer">
      <div className="closeButtonSpace">
        <RiCloseLine onClick={() => props.setIsupdateModalVisible(false)} />
      </div>
      <div className="updateModalSpace">
        <form className="updateForm" onSubmit={handleSubmit}>
          <p>Rename</p>
          <input
            className="inputUpdatePortfolio"
            placeholder="blabla"
            onChange={(e) => changeHandler(e)}
          ></input>
          <button type="submit">Confirm</button>
        </form>
      </div>
    </div>
  );
};
