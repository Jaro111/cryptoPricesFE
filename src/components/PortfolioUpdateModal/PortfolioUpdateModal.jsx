import React, { useState } from "react";
import "./PortfolioUpdateModal.css";
import { RiCloseLine } from "react-icons/ri";
import { renamePortfolio } from "../../utilsUser/portfolio/portfolioFunctions";
import { deletePortfolio } from "../../utilsUser/portfolio/portfolioFunctions";

export const PortfolioUpdateModal = (props) => {
  const [newPortfolioName, setNewPortfolioName] = useState("");
  const [isConfirmDeleteVisible, setIsConfirmDeleteVisible] = useState(false);
  const [isDeletePortfolioMessageVisible, setIsDeletePortfolioMessageVisible] =
    useState(false);

  const changeHandler = (e) => {
    const newName = e.target.value;
    setNewPortfolioName(newName);
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

  const deletePortfoliofFunc = () => {
    setIsConfirmDeleteVisible(true);
  };

  const confirmDeletePortfolioFunc = async () => {
    const data = await deletePortfolio(props.user.id, props.mainPortfolio.id);
    console.log(data);
    props.setDeletePortfolioMessage(data.message);
    setIsDeletePortfolioMessageVisible(true);
    setTimeout(() => {
      props.setIsupdateModalVisible(false);
    }, 2000);
    window.location.reload();
  };

  const closeModal = () => {
    props.setIsupdateModalVisible(false);
    setIsDeletePortfolioMessageVisible(false);
  };

  return (
    <div className="PortfolioUpdateModalContainer">
      <div className="closeButtonSpace">
        <RiCloseLine onClick={() => closeModal()} />
      </div>
      <div className="updateModalSpace">
        <form className="updateForm" onSubmit={handleSubmit}>
          <p>Rename</p>
          <input
            className="inputUpdatePortfolio"
            placeholder="blabla"
            onChange={(e) => changeHandler(e)}
          ></input>
          <button className="confirmRenamePortfolioBtn" type="submit">
            Confirm
          </button>
        </form>
      </div>
      {!isDeletePortfolioMessageVisible ? (
        isConfirmDeleteVisible ? (
          <div className="deleteModalSpace">
            <p>Are You Sure to delete {props.mainPortfolio.title}?</p>
            <button
              onClick={confirmDeletePortfolioFunc}
              className="deletePortfolioBtn"
            >
              Confirm
            </button>
          </div>
        ) : (
          <div className="deleteModalSpace">
            <p>Delete Portfolio</p>
            <button
              onClick={deletePortfoliofFunc}
              className="deletePortfolioBtn"
            >
              Delete
            </button>
          </div>
        )
      ) : (
        <div className="deleteModalSpace">
          <p>{props.deletePortfolioMessage}</p>
        </div>
      )}
    </div>
  );
};
