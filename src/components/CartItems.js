import React from "react";
import CartItem from "./CartItem";
import "./Cart.css";
import { useSelector } from "react-redux";
const CartItems = () => {
  const cardItems = useSelector((state) => state.card.items);
  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <ul>
        {cardItems.map((item) => {
          return (
            <li key={item.id}>
              <CartItem
                id={item.id}
                price={item.price}
                total={item.totalPrice}
                name={item.name}
                quantity={item.quantity}
              />
              ;
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CartItems;