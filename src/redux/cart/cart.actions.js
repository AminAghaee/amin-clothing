import {
  ADD_ITEM,
  DECREASE_QUANTITY,
  INCREASE_QUANTITY,
  TOGGLE_CART_HIDDEN,
} from "./cart.types";

export const toggleCartHidden = {
  type: TOGGLE_CART_HIDDEN,
};

export const addItem = (item) => ({
  type: ADD_ITEM,
  payload: item,
});

export const increaseItemQuantity = (index) => ({
  type: INCREASE_QUANTITY,
  payload: index,
});

export const decreaseItemQuantity = (index) => ({
  type: DECREASE_QUANTITY,
  payload: index,
});
