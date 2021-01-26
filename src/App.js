import { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import ShopPage from "./pages/ShopPage/ShopPage";

import "./App.css";
import Homepage from "./pages/homepage/Homepage";
import HeaderComponent from "./components/header component/HeaderComponent";
import SignInPage from "./pages/SignInPage/SignInPage";

import { auth } from "./firebase/firebase.util";

function App() {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    let unsubscribeFromAuth = null;
    unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      console.log(currentUser);
    });
    return () => {
      unsubscribeFromAuth();
    };
  }, [currentUser]);

  return (
    <div>
      <HeaderComponent currentUser={currentUser} />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/signin" component={SignInPage} />
      </Switch>
    </div>
  );
}

export default App;
