import React from "react";
import "./LogIn.css";
import { logIn } from "../../../utilsUser/user/userFunctions";
import { useState, useContext } from "react";

export const LogIn = ({ setUser, user }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  //
  const changeHandler = (e, setter, state) => {
    setter(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await logIn(username, password);
    // console.log(data);
    setUser(data);
  };

  return (
    <>
      <div className="logInContainer" content="">
        <h3>Log in</h3>
        <form constent="" className="logInForm" onSubmit={handleSubmit}>
          <input
            placeholder="user name"
            onChange={(e) => changeHandler(e, setUsername, username)}
          />
          <input
            placeholder="password"
            onChange={(e) => changeHandler(e, setPassword, password)}
          />
          <button type="submit">Log In</button>
        </form>
      </div>
    </>
  );
};
