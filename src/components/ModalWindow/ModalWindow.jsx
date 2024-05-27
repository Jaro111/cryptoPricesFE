import React from "react";
import "./ModalWindow.css";
import { RiCloseLine } from "react-icons/ri";
import { LogSign } from "../LogInSignIn/LogSign/LogSign";

export const ModalWindow = ({ setIsOpen, setUser, user }) => {
  return (
    <>
      <div className="darkBG">
        <div className="closeBtnDiv">
          <RiCloseLine className="closeBtn" onClick={() => setIsOpen(false)} />
        </div>
        <div className="centered">
          <div className="modal">
            <LogSign setUser={setUser} user={user} setIsOpen={setIsOpen} />
          </div>
        </div>
      </div>
    </>
  );
};
