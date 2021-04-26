import React, { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInSignUpPage from "./pages/sign-in-sign-up/sign-in-sign-up.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { useSelector, useDispatch } from "react-redux";
import { SET_CURRENT_USER } from "./redux/user/user.types";

function App() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => ({ user: state.user.currentUser }));

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          dispatch({
            type: SET_CURRENT_USER,
            payload: { id: snapShot.id, ...snapShot.data() },
          });
        });
      } else {
        dispatch({
          type: SET_CURRENT_USER,
          payload: null,
        });
      }
    });
    return () => unsubscribeFromAuth();
  }, [dispatch]);

  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route
          exact
          path="/signin"
          render={() => (user ? <Redirect to="/" /> : <SignInSignUpPage />)}
        />
      </Switch>
    </>
  );
}

export default App;
