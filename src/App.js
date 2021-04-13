import React, { useEffect } from "react";
import { Switch, Route,useLocation } from "react-router-dom";
//components
import Error from "./pages/Error";
import Landing from "./pages/Landing";
import Menu from "./pages/Menu";
import Header from "./components/singleUse/Header";
import Footer from "./components/singleUse/Footer";
// redux and data
import pancakesData from "./data/pancakesData";
import { useDispatch } from 'react-redux'
import {createListVisible,createCategories} from "./actions"
// polyfills
import smoothscroll from 'smoothscroll-polyfill';

// style
import "./index.css";

function App() {
  const dispatch = useDispatch();
  const location = useLocation();
  useEffect(()=>{
    // dispatch(createListVisible(pancakesData.length))
     // geting all category names
smoothscroll.polyfill();

  const uniqueNames = [];
  const categories = [];

  pancakesData.forEach(item=>{
    if( uniqueNames.indexOf(item.category) === -1){
      uniqueNames.push(item.category)
      categories.push({
        category: item.category,
        list: [item]
      })
    }else{
      // checking for exisiting array, to which it will be added 
      for(let i=0;i<categories.length;i++){
        if(categories[i].category === item.category){
          categories[i].list.push(item);
          break;
        }
      }
    }
  })
  dispatch(createCategories(categories))
  dispatch(createListVisible(uniqueNames.length))


  console.log(categories)
  },[dispatch])
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
