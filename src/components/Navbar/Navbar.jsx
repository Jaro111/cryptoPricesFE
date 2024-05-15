import React from "react";
import "./Navbar.css";
import { SearchBar } from "../SearchBar/Search";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="Navbar">
      <Link to="/"></Link>
      <Link to="/CoinPage"></Link>
      <Link to="/Portfolio"></Link>
      <SearchBar />
    </div>
  );
};
