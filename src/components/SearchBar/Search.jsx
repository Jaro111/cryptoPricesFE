import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { getCoinsIds } from "../../utils/utils";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { PortfolioBar } from "../PortfolioBar/PortfolioBar";
import "./Search.css";

export const SearchBar = () => {
  //
  const [searchInput, setSearchInput] = useState("");
  const [allCoins, setAllCoins] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  const navigate = useNavigate();
  const location = useLocation();

  const getIdS = async () => {
    const searchIds = await getCoinsIds();
    setAllCoins(searchIds);
  };

  useEffect(() => {
    getIdS();
  }, [suggestions]);
  //

  const handleChange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setSearchInput(value);
    let myList = [];
    if (value.length > 2) {
      allCoins.filter((item, index) => {
        if (
          // item.name.toLowerCase().includes(searchInput) ||
          // item.symbol.toLowerCase().includes(searchInput)
          value.slice(0, value.length) ===
            item.name.toLowerCase().slice(0, value.length) ||
          value.slice(0, value.length) ===
            item.symbol.toLowerCase().slice(0, value.length)
        ) {
          myList.push(item);
        } else if (
          value.slice(0, value.length) !==
            item.name.toLowerCase().slice(0, value.length) ||
          value.slice(0, value.length) !==
            item.symbol.toLowerCase().slice(0, value.length)
        ) {
          myList.splice(index, 1);
        }
        {
          setSuggestions([]);
        }
      });
      setSuggestions(myList.slice(0, 10));
    } else setSuggestions([]);
  };

  const clickSearchedCoin = (suggestion) => {
    console.log(location);
    navigate("./CoinPage", { state: suggestion.id });
    setSearchInput("");
    setSuggestions([]);
  };

  return (
    <div className="sugDiv">
      <input
        className="inputCoinSearch"
        type="search"
        placeholder="Search"
        onChange={handleChange}
        value={searchInput}
      />

      {suggestions.length > 0 && (
        <ul className="sugList">
          {suggestions.map((suggestion, index) => (
            <li
              onClick={() => clickSearchedCoin(suggestion)}
              className="sugItem"
              key={index}
            >
              {suggestion.name}({suggestion.symbol})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
