import React from "react";
import { BrowserRouter as Router, Switch, Route,useRouteMatch } from "react-router-dom";
//components
import Error from "./pages/Error";
import Landing from "./pages/Landing";
import Menu from "./pages/Menu";

// style
import "./index.css";
import Header from "./components/Header";
function App() {
  const MenuItem = () =>{
    let item =useRouteMatch("/menu/:slug");
    return <Menu item={item}/>
  }
  return (
    <Router>
      <Header/>
      <Switch>
        <Route path="/menu" exact component={MenuItem}>
        </Route>
        <Route path="/" exact component={Landing}>
        </Route>
        <Route path="/*">
          <Error/>
        </Route>
      </Switch>
    </Router>
  
  );
}

export default App;
