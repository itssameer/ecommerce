import { Route, Switch } from "react-router-dom";
import ShopPage from "./pages/ShopPage/ShopPage";

import "./App.css";
import Homepage from "./pages/homepage/Homepage";
import HeaderComponent from "./components/header component/HeaderComponent";
import SignInPage from "./pages/SignInPage/SignInPage";

function App() {
  return (
    <div>
      <HeaderComponent />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/signin" component={SignInPage} />
      </Switch>
    </div>
  );
}

export default App;
