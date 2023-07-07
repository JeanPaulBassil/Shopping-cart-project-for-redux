import React from "react";
import { cardActions } from "../store/cart-slice";

import "./Product.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const Product = ({ name, id, imgURL, price }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    console.log(name, id, price);
    dispatch(cardActions.addtoCard({ name, id, price }));
  };
  return (
    <div className="card">
      <img src={imgURL} alt={name} />
      <h2>{name}</h2>
      <p>$ {price}</p>
      <button onClick={handleClick}>Add to cart</button>
    </div>
  );
};

export default Product;
