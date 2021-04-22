import React, { useEffect,useState } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
//components
import Error from "./pages/Error";
import Landing from "./pages/Landing";
import Menu from "./pages/Menu";
import Checkout from "./pages/Checkout";
import Header from "./components/singleUse/Header";
import Footer from "./components/singleUse/Footer";
// redux and data
import pancakesData from "./data/pancakesData";
import { useDispatch } from "react-redux";
import { createListVisible, createCategories } from "./actions";
// polyfills

// style
import "./index.css";
import CartFixed from "./components/singleUse/Cart/CartFixed";

function App() {
  const dispatch = useDispatch();
  const location = useLocation();
  // for cart
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
    console.log(document.getElementsByTagName("body")[0].classList.toggle("preventBodyScroll"))
    //     

  };
  useEffect(() => {
    //  initizalization of base state

    const uniqueNames = [];
    const categories = [];

    pancakesData.forEach((item) => {
      if (uniqueNames.indexOf(item.category) === -1) {
        uniqueNames.push(item.category);
        categories.push({
          category: item.category,
          list: [item],
        });
      } else {
        // checking for exisiting array, to which it will be added
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

    console.log(categories);
  }, [dispatch]);
  return (
    <>
      <Header location={location} handleClick={handleClick}/>
      <Switch>
        <Route path="/menu" component={Menu}></Route>
        <Route path="/checkout" component={Checkout}></Route>

        <Route path="/" exact component={Landing}></Route>
        <Route path="/*">
          <Error />
        </Route>
      </Switch>
    <CartFixed handleClick={handleClick} open={open}/>
      <Footer />
    </>
  );
}

export default App;
