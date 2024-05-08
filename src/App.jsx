import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { Portfolio } from "./pages/Portfolio";
import { CoinPage } from "./pages/CoinPage";

function App() {
  return (
    <BrowserRouter basename="">
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/coinPage" element={<CoinPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
