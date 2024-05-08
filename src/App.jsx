import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import React from "react";
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import { CryptoSpace } from "./components/CryptoSpace/CryptoSpace";

function App() {
  return (
    <>
      <Navbar />

      <CryptoSpace />

      <Footer />
    </>
  );
}

export default App;
