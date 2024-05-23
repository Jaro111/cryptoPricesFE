import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cookies from "js-cookie";
import "./App.css";
import { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import { Home } from "./pages/Home";
import { Portfolio } from "./pages/Portfolio";
import { CoinPage } from "./pages/CoinPage";
import { Favourites } from "./pages/Favourites";

function App() {
  const [user, setUser] = useState({});

  useEffect(() => {}, []);

  return (
    <BrowserRouter basename="">
      <Navbar setUser={setUser} user={user} />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/coinPage" element={<CoinPage user={user} />} />
        <Route path="/favourites" element={<Favourites />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
