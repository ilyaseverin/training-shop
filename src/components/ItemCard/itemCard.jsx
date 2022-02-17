import React from "react";
import "./itemCard.css";
//import Phone from "./images/phone.svg";

function ItemCard({ image }) {
  return (
    <div>
      <img src={image} alt="photo" />
      <p>Title</p>
      <p>Price</p>
    </div>
  );
}

export default ItemCard;
