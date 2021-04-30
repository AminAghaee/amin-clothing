import {
  ADD_ITEM,
  DECREASE_QUANTITY,
  INCREASE_QUANTITY,
  TOGGLE_CART_HIDDEN,
} from "./cart.types";

const initialState = { hidden: true, cartItems: [] };

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_CART_HIDDEN:
      return { ...state, hidden: !state.hidden };

    case ADD_ITEM:
      return {
        ...state,
        cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
      };

    case INCREASE_QUANTITY:
      state.cartItems[action.payload].quantity++;
      return {
        ...state,
        cartItems: [...state.cartItems],
      };

    case DECREASE_QUANTITY:
      state.cartItems[action.payload].quantity--;
      return {
        ...state,
        cartItems: [...state.cartItems],
      };

    default:
      return state;
  }
};
