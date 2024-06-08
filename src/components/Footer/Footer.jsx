import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="Footer">
      <Link to="./"></Link>
      <Link to="./CoinPage"></Link>
      <Link to="./Portfolio"></Link>
      <div className="footerDiv"></div>
    </div>
  );
};
