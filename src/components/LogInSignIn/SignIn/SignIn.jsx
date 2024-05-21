import React from "react";
import { useState } from "react";
import { signUp } from "../../../utilsUser/user/userFunctions";

export const SignIn = ({ setUser, user }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const changeHandler = (e, setter, state) => {
    setter(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Handle submit");
    const data = await signUp(username, email, password);
    setUser(data);
  };

  return (
    <div content="">
      <h3>Sign Up in</h3>
      <form onSubmit={handleSubmit}>
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
      </form>
    </div>
  );
};
