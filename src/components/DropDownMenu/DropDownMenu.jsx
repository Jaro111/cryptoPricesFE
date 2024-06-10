import React from "react";
import { useState } from "react";
import { DropList } from "../DropList/DropList";

export const DropMenu = (props) => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };
  return (
    <div className="menuWrapper">
      <div
        className="dropMenu"
        onClick={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <button className="dropCahinBtn" onClick={props.clickDrop}>
          &emsp;
          {">"}
          &emsp;
        </button>
        {isDropdownVisible && <DropList clickList={props.clickList} />}
      </div>
    </div>
  );
};
