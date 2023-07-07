import React from "react";
import "./Cart.css";
import { useSelector } from "react-redux";
import { cardActions } from "../store/cart-slice";
import { useDispatch } from "react-redux";

const Cart = () => {
  const quantity = useSelector((state) => state.card.totalQuantity);
  console.log(quantity);
  const dispatch = useDispatch();
  const showCard = () => {
    dispatch(cardActions.setShowCard());
  };
  return (
    <div className="cartIcon">
      <h3 onClick={showCard}>Cart: {quantity} Items</h3>
    </div>
  );
};

export default Cart;
