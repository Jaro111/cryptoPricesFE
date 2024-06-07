import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { alertContext } from "./common/contexts";
import Cookies from "js-cookie";
import "./App.css";
import { authCheck } from "./utilsUser/user/userFunctions";
import { useState } from "react";
import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import { Home } from "./pages/Home";
import { Portfolio } from "./pages/Portfolio";
import { CoinPage } from "./pages/CoinPage";
import { Favourites } from "./pages/Favourites";
import { Alert } from "./components/Alert/Alert";

function App() {
  const [user, setUser] = useState({});
  const [alertMessage, setAlertMessage] = useState("");
  const [isAlertOpen, setIsAlertOpen] = useState(false);

  const logInWithToken = async (token, setUser) => {
    const persUser = await authCheck(token);
    console.log("persUser: ", persUser.user);
    await setUser(persUser.user);
  };

  useEffect(() => {
    if (document.cookie) {
      let token = Cookies.get("jwt-token");
      console.log("jwt token", token);
      if (token === false) {
        setUser({});
      } else {
        logInWithToken(token, setUser);
      }
    }
  }, []);

  return (
    <alertContext.Provider
      value={{
        isAlertOpen,
        setIsAlertOpen,
        alertMessage,
        setAlertMessage,
      }}
    >
      <BrowserRouter basename="">
        <Alert />
        <Navbar setUser={setUser} user={user} />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/coinPage" element={<CoinPage user={user} />} />
          <Route path="/favourites" element={<Favourites />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </alertContext.Provider>
  );
}

export default App;
