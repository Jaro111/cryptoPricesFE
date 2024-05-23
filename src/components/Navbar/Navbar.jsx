import React from "react";
import "./Navbar.css";
import { SearchBar } from "../SearchBar/Search";
import { UserMenu } from "../UserMenu/UserMenu";
import { NavLink } from "react-router-dom";
import { useState, useContext } from "react";

export const Navbar = ({ setUser, user }) => {
  return (
    <div className="Navbar">
      <div className="navLinksContainer">
        <NavLink className="navLink" to="/">
          Home
        </NavLink>
      </div>

      <SearchBar />
      <div className="rightNav">
        <UserMenu className="userSpace" setUser={setUser} user={user} />
      </div>
    </div>
  );
};
