import React from "react";
import { useLocation } from "react-router-dom";

export const Portfolio = () => {
  const location = useLocation();
  const user = location.state;
  return (
    <>
      <p>Portfolio BLABLA</p>
    </>
  );
};

export default Portfolio;
