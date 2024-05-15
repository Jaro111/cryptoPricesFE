import React from "react";
import "./DropList.css";
import { cutUrl } from "../../common/functionsJs";

export const DropList = (props) => {
  const listItem = props.clickList.map((item, index) => (
    <li className="listItemContent" key={index}>
      <a className="listLink" href={item} target="_blank">
        {item.includes("twitter") ? item : cutUrl(`${item}`)}
      </a>
    </li>
  ));
  return <ul className="dropDownMenu">{listItem}</ul>;
};
