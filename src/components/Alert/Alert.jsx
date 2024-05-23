import React from "react";
import "./Alert.css";
import { useState, useContext } from "react";
import { RiCloseLine } from "react-icons/ri";
import { alertContext } from "../../common/contexts";

export const Alert = () => {
  const alertMessage = useContext(alertContext).alertMessage;
  const isAlertOpen = useContext(alertContext).isAlertOpen;
  const setIsAlertOpen = useContext(alertContext).setIsAlertOpen;

  return (
    <>
      {isAlertOpen && (
        <div className="alertContainer">
          <div className="alertCloseBtnContainer">
            <RiCloseLine
              onClick={() => setIsAlertOpen(false)}
              className="alertCloseBtn"
            />
          </div>
          <div className="alertMessageContainer">
            <p className="alertMessage">{alertMessage}</p>
          </div>
        </div>
      )}
    </>
  );
};
