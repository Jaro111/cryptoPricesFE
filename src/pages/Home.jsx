import React from "react";
import { Navbar } from "../components/Navbar/Navbar";
import { CryptoSpace } from "../components/CryptoSpace/CryptoSpace";
import { Footer } from "../components/Footer/Footer";

export const Home = () => {
  return (
    <>
      <Navbar />

      <CryptoSpace />

      <Footer />
    </>
  );
};
