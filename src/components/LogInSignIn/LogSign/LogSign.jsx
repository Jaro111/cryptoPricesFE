import React from "react";
import "./LogSign.css";
import { useState } from "react";
import { LogIn } from "../LogIn/LogIn";
import { SignIn } from "../SignIn/SignIn";

export const LogSign = ({ setUser, user, setIsOpen }) => {
  const [logisActive, setLogisActive] = useState(false);
  const [signIsActive, setSignisActive] = useState(false);

  const clickLog = () => {
    setLogisActive(true);
    setSignisActive(false);
  };
  const clickSign = () => {
    setSignisActive(true);
    setLogisActive(false);
  };

  return (
    <div className="LogSignContainer">
      <div className="LogSign">
        <button
          style={{ backgroundColor: logisActive ? "green" : "grey" }}
          className="LogInBtn"
          onClick={clickLog}
        >
          Log In
        </button>
        <button
          style={{ backgroundColor: signIsActive ? "green" : "grey" }}
          className="SignUpBtn"
          onClick={clickSign}
        >
          Sign Up
        </button>
      </div>
      <div className="logSignContainer">
        {(logisActive && <LogIn setUser={setUser} user={user} />) ||
          (signIsActive && (
            <SignIn setUser={setUser} user={user} setIsOpen={setIsOpen} />
          ))}
      </div>
    </div>
  );
};
