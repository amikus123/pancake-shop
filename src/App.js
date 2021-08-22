import React, { useEffect, useState } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
//components
import Landing from "./pages/Landing";
import Menu from "./pages/Menu";
import Checkout from "./pages/Checkout";
import Form from "./pages/Form";
import CartFixed from "./components/singleUse/Cart/CartFixed";
import Header from "./components/singleUse/Header";
import Footer from "./components/singleUse/Footer";
// redux and data
import pancakesData from "./data/pancakesData";
import { useDispatch } from "react-redux";
import { createListVisible, createCategories } from "./actions";

import "./index.css";

function App() {
  const dispatch = useDispatch();
  const location = useLocation();
  // cart state
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  useEffect(() => {
    //  initizalization of base state
    const uniqueNames = [];
    const categories = [];
    // if category for item exists, it is added to that array
    // else new category is made
    pancakesData.forEach((item) => {
      if (uniqueNames.indexOf(item.category) === -1) {
        uniqueNames.push(item.category);
        categories.push({
          category: item.category,
          list: [item],
        });
      } else {
        for (let i = 0; i < categories.length; i++) {
          if (categories[i].category === item.category) {
            categories[i].list.push(item);
            break;
          }
        }
      }
    });
    dispatch(createCategories(categories));
    dispatch(createListVisible(uniqueNames.length));
  }, [dispatch]);
  return (
    <>
      <Header location={location} handleClick={handleClick} />
      <Switch>
        <Route path="/menu" component={Menu}></Route>
        <Route path="/checkout" component={Checkout}></Route>

        <Route path="/form" exact component={Form}></Route>
        <Route path="/" component={Landing}></Route>
      </Switch>

      <CartFixed handleClick={handleClick} location={location} open={open} />
      <Footer />
    </>
  );
}

export default App;
