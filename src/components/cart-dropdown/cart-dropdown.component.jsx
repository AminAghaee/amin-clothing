import React from "react";
import "./cart-dropdown.styles.scss";
import CustomButton from "./../custom-button/custom-button.component";
import { useSelector } from "react-redux";
import CartItem from "../cart-item/cart-item.component";

export const CartDropdown = () => {
  const cartItems = useSelector(({ cart: { cartItems } }) => cartItems);
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <CustomButton>GO TO CHECKOUT </CustomButton>
    </div>
  );
};
