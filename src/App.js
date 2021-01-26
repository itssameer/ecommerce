import { Route, Switch } from "react-router-dom";
import ShopPage from "./pages/ShopPage/ShopPage";

import "./App.css";
import Homepage from "./pages/homepage/Homepage";
import HeaderComponent from "./components/header component/HeaderComponent";

function App() {
  return (
    <div>
      <HeaderComponent />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
