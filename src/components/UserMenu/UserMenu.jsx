import React from "react";
import { useState, useContext } from "react";
import { alertContext } from "../../common/contexts";
import { ModalWindow } from "../ModalWindow/ModalWindow";
import { Alert } from "../Alert/Alert";
import "./UserMenu.css";
import { IoWallet } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export const UserMenu = ({ setUser, user }) => {
  const [isOpen, setIsOpen] = useState(false);
  const setIsAlertOpen = useContext(alertContext).setIsAlertOpen;
  const setAlertMessage = useContext(alertContext).setAlertMessage;
  const notLogMessageP =
    "If You wold like to create a Portfolio You need to Log In. If You don't have an account You Can Sign In. It takes 1 minute 😉";
  const notLogMessageW =
    "If You wold like to create a Watch List You need to Log In. If You don't have an account You Can Sign In. It takes 1 minute 😉";
  const navigate = useNavigate();

  const logOut = () => {
    setUser({});
    document.cookie =
      "jwt-token=; expires= Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    setIsOpen(false);
    navigate("./");
  };

  const goToPortfolio = () => {
    if (!user.username) {
      setAlertMessage(notLogMessageP);
      setIsAlertOpen(true);
    } else {
      navigate("./Portfolio", { state: user });
    }
  };

  const goToFavourites = () => {
    if (!user.username) {
      setAlertMessage(notLogMessageW);
      setIsAlertOpen(true);
    } else {
      navigate("./Favourites");
    }
  };

  return (
    <div className="UserMenu">
      {!user.username ? (
        <>
          <div className="logOutSpace">
            <p className="userMenuContent">{user.username}</p>

            <IoWallet className="walletIcon" onClick={goToPortfolio} />

            <FaRegStar className="favIcon" onClick={goToFavourites} />
            <button
              className="logInRegisterBtn"
              onClick={() => setIsOpen(true)}
            >
              Log In / Sign In
            </button>
            {isOpen && (
              <ModalWindow
                setIsOpen={setIsOpen}
                setUser={setUser}
                user={user}
              />
            )}
          </div>
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
