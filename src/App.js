import React,{useEffect,useState} from "react";
import { BrowserRouter as Router, Switch, Route,useRouteMatch,useLocation } from "react-router-dom";
//components
import Error from "./pages/Error";
import Landing from "./pages/Landing";
import Menu from "./pages/Menu";

// style
import "./index.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const MenuItem = () =>{
    let item =useRouteMatch("/menu/:slug");
    return <Menu item={item}/>
  }

  const location = useLocation();


  return (
    <>
      <Header location={location}/>
      <Switch>
        <Route path="/menu" exact component={MenuItem}>
        </Route>
        <Route path="/" exact component={Landing}>
        </Route>
        <Route path="/*">
          <Error/>
        </Route>
      </Switch>
      <Footer/>
  </>
  );
}

export default App;
