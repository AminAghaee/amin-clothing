import React from "react";
import { Link } from "react-router-dom";
import "./header.styles.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";
import { useSelector, useDispatch } from "react-redux";
import { SET_CURRENT_USER } from "../../redux/user/user.types";
import CartIcon from "../cart-icon/cart-icon.component";
import { CartDropdown } from "../cart-dropdown/cart-dropdown.component";

const Header = () => {
  const dispatch = useDispatch();

  const hidden = useSelector(({ cart: { hidden } }) => hidden);
  const { currentUser } = useSelector((state) => ({
    currentUser: state.user.currentUser,
  }));

  const signOut = () => {
    try {
      auth.signOut();
      dispatch({ type: SET_CURRENT_USER, payload: {} });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="option" onClick={signOut}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
        <Link className="option" to="/">
          <CartIcon />
        </Link>
      </div>
      {!hidden && <CartDropdown />}
    </div>
  );
};

export default Header;
