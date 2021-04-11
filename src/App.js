import React from "react";
import { Switch, Route,useLocation } from "react-router-dom";
//components
import Error from "./pages/Error";
import Landing from "./pages/Landing";
import Menu from "./pages/Menu";
import Header from "./components/singleUse/Header";
import Footer from "./components/singleUse/Footer";

// style
import "./index.css";

function App() {

  const location = useLocation();
  return (
    <>
      <Header location={location}/>
      <Switch>
        <Route path="/menu"  component={Menu}>
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
