import React, { Component } from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

export const Footer = () => {
  return (
    <div className="Footer">
      <Link to="./"></Link>
      <Link to="./CoinPage"></Link>
      <Link to="./Portfolio"></Link>
      <div className="cmcLogoDiv">
        <p className="cmcLogoContent">All Data Provided by</p>
        <img src={logo} className="cmcLogo"></img>
      </div>
    </div>
  );
};
