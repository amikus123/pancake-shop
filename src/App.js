import React from "react";
import { BrowserRouter as Router, Switch, Route,useRouteMatch } from "react-router-dom";
//components
import Error from "./pages/Error";
import Landing from "./pages/Landing";
import Menu from "./pages/Menu";

// style
import "./index.css";
function App() {
  const MenuItem = () =>{
    let item =useRouteMatch("/menu/:slug");
    return <Menu item={item}/>
  }
  return (
    <Router>
      <Switch>
        <Route path="/menu">
          <MenuItem />
        </Route>
  
        <Route path="/" exact>
          <Landing />
        </Route>
        <Route path="/*">
          <Error/>
        </Route>
      </Switch>
      <p>test</p>
    </Router>
  
  );
}

export default App;
