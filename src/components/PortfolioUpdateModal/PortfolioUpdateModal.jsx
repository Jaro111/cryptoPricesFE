import React, { useState } from "react";
import "./PortfolioUpdateModal.css";
import { RiCloseLine } from "react-icons/ri";
import { renamePortfolio } from "../../utilsUser/portfolio/portfolioFunctions";

export const PortfolioUpdateModal = (props) => {
  const [newPortfolioName, setNewPortfolioName] = useState("");

  const changeHandler = (e) => {
    const newName = e.target.value;
    setNewPortfolioName(newName);
    console.log(props.userPortfolio[0].title);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let mainLength = Object.keys(props.mainPortfolio).length;
    if (mainLength > 0) {
      const rename = await renamePortfolio(
        newPortfolioName,
        props.user.id,
        props.mainPortfolio.id
      );
      props.setMainPortfolio(rename.portfolio);
      console.log(rename.portfolio);
    } else {
      const rename = await renamePortfolio(
        newPortfolioName,
        props.user.id,
        props.userPortfolio[0].id
      );
      console.log(rename.portfolio);
      props.setMainPortfolio(rename.portfolio);
    }
    props.setIsupdateModalVisible(false);
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
