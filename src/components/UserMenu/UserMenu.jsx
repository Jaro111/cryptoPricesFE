import React from "react";
import { useState } from "react";
import { ModalWindow } from "../ModalWindow/ModalWindow";
import "./UserMenu.css";
import { IoWallet } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export const UserMenu = ({ setUser, user }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  const logOut = () => {
    setUser({});
    setIsOpen(false);
    navigate("./");
  };

  const goToPortfolio = () => {
    navigate("./Portfolio", { state: user });
  };

  const goToFavourites = () => {
    console.log("click");
    navigate("./Favourites");
  };

  return (
    <div className="UserMenu">
      {!user.username ? (
        <>
          <button className="logInRegisterBtn" onClick={() => setIsOpen(true)}>
            Log In / Sign In
          </button>
          {isOpen && (
            <ModalWindow setIsOpen={setIsOpen} setUser={setUser} user={user} />
          )}
        </>
      ) : (
        <div className="logOutSpace">
          <p className="userMenuContent">{user.username}</p>

          <IoWallet className="walletIcon" onClick={goToPortfolio} />

          <FaRegStar className="favIcon" onClick={goToFavourites} />

          <button className="logInRegisterBtn" onClick={logOut}>
            Log Out
          </button>
        </div>
      )}
    </div>
  );
};
