import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import { Home } from "./pages/Home";
import { Portfolio } from "./pages/Portfolio";
import { CoinPage } from "./pages/CoinPage";
import { Favourites } from "./pages/Favourites";

function App() {
  return (
    <BrowserRouter basename="">
      <Navbar />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/coinPage" element={<CoinPage />} />
        <Route path="/favourites" element={<Favourites />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
