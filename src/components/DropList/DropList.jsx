import React from "react";
import "./DropList.css";

export const DropList = (props) => {
  const listItem = props.clickList.map((item, index) => (
    <li className="listItemContent" key={index}>
      <a className="listLink" href={item} target="_blank">
        {item}
      </a>
    </li>
  ));
  return <ul className="dropDownMenu">{listItem}</ul>;
};
