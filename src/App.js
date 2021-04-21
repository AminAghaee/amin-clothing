import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/hedear.component";
import SignInSignUpPage from "./pages/sign-in-sign-up/sign-in-sign-up.component";
import { auth } from "./firebase/firebase.utils";

function App() {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged((user) =>
      setCurrentUser(user)
    );
    return () => unsubscribeFromAuth();
  }, [currentUser]);

  return (
    <>
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/signin" component={SignInSignUpPage} />
      </Switch>
    </>
  );
}

export default App;
