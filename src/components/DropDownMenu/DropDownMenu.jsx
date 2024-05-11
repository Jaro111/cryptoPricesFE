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
    <div
      className="menu"
      onClick={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button onClick={props.clickDrop}>
        &emsp;
        {">"}
        &emsp;
      </button>
      {isDropdownVisible && <DropList clickList={props.clickList} />}
    </div>
  );
};

//   <ul>
//     {products.map(product => (
//       <li key={product.id}>
//         {product.name} - ${product.price}{' '}
//         <button onClick={() => addToBasket(product)}>Add to Basket</button>
//       </li>
//     ))}
//   </ul>
