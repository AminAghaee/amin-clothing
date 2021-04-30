import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import "./collection-item.styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";
import { increaseItemQuantity } from "./../../redux/cart/cart.actions";

const CollectionItem = ({ item }) => {
  const { id, name, price, imageUrl } = item;
  const dispatch = useDispatch();
  const cartItems = useSelector(({ cart: { cartItems } }) => cartItems);

  const handleAddItem = () => {
    const itemIndex = cartItems.findIndex((cartItem) => cartItem.id === id);

    if (itemIndex !== -1) {
      dispatch(increaseItemQuantity(itemIndex));
    } else {
      dispatch(addItem(item));
    }
  };

  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name"> {name} </span>
        <span className="price"> ${price} </span>
      </div>
      <CustomButton onClick={handleAddItem} inverted>
        ADD TO CART
      </CustomButton>
    </div>
  );
};

export default CollectionItem;
