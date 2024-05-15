import React, { useLayoutEffect } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { getCoinsIds } from "../../utils/utils";
import { BsFilterSquare } from "react-icons/bs";
import "./Search.css";

export const SearchBar = () => {
  //
  const [searchInput, setSearchInput] = useState("");
  const [allCoins, setAllCoins] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  //
  const getIdS = async () => {
    const searchIds = await getCoinsIds();
    setAllCoins(searchIds);
  };

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

  const clickSearchedCoin = () => {
    console.log("click");
  };

  useEffect(() => {
    getIdS();
  }, []);

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
            <li onClick={clickSearchedCoin} className="sugItem" key={index}>
              {suggestion.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
