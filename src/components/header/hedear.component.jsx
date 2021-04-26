import React from "react";
import { Link } from "react-router-dom";
import "./header.styles.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "./../../firebase/firebase.utils";
import { useSelector, useDispatch } from "react-redux";

const Header = () => {
  const { currentUser } = useSelector((state) => ({
    currentUser: state.user.currentUser,
  }));

  const dispatch = useDispatch();

  const signOut = () => {
    try {
      auth.signOut();
      dispatch({ type: "SET_CURRENT_USER", payload: {} });
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
      </div>
    </div>
  );
};

export default Header;
