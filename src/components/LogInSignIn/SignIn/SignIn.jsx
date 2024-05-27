import React from "react";
import { useState } from "react";
import { signUp } from "../../../utilsUser/user/userFunctions";
import { addPortfolio } from "../../../utilsUser/portfolio/portfolioFunctions";
import "./SignIn.css";

export const SignIn = ({ setUser, user, setIsOpen }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signMessage, setSignMessage] = useState("");

  const changeHandler = (e, setter, state) => {
    setter(e.target.value);
  };

  const createPortfolio = async (data) => {
    const portfolio = await addPortfolio(data.id);
    console.log(portfolio);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Handle submit");
    const data = await signUp(username, email, password);
    createPortfolio(data);
    console.log(data);
    if (data.username) {
      setSignMessage(`Hi ${data.username}. You can log In `);
    } else {
      setSignMessage(`Something went wrong. Try again`);
    }
    // await setUser(data);
  };

  return (
    <div content="" className="signInformContainer">
      <h3>Sign Up</h3>
      <form className="signInForm" onSubmit={handleSubmit}>
        <input
          placeholder="user name"
          onChange={(e) => changeHandler(e, setUsername, username)}
        ></input>
        <input
          placeholder="email"
          onChange={(e) => changeHandler(e, setPassword, email)}
        ></input>
        <input
          placeholder="password"
          onChange={(e) => changeHandler(e, setEmail, password)}
        ></input>

        <button type="submit">Sign Up</button>
        <h2>{signMessage}</h2>
      </form>
    </div>
  );
};
