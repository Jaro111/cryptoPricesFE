import React, { useLayoutEffect } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { getCoinsIds } from "../../utils/utils";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
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
  }, []);
  //

  const handleChange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setSearchInput(value);

    if (value.length > 1) {
      const myList = allCoins.filter((item) => {
        if (
          item.name.toLowerCase().includes(searchInput) ||
          item.symbol.toLowerCase().includes(searchInput)
        ) {
          return item;
        } else {
          setSuggestions([]);
        }
      });

      setSuggestions(myList.slice(0, 5));
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
        type="text"
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
              {suggestion.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
