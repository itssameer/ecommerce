import { Route, Switch } from "react-router-dom";

import "./App.css";
import TestMenu from "./components/test-component/TestMenu";
import Homepage from "./pages/homepage/Homepage";

const HatsPage = () => {
  return <h1>Hats</h1>;
};

const JackID = (props) =>{

  console.log(props);
  return(<h1>
      id {props.match.params.jackId}
    </h1>)
}

const JacketPage = (props) => {
  
  return (<>
    <button onClick={()=> {
      console.log(props);
      props.history.push('/jacket/12')} }>go to jacket 12</button>
  <h1>Jackets</h1>
  </>);
};

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop/hats" component={HatsPage} />
        <Route exact path="/jacket" component={JacketPage} />
        <Route path="/jacket/:jackId" component={JackID} />        
      </Switch>
    </div>
  );
}

export default App;
