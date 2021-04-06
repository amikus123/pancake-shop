import React, { useEffect } from "react";
import Background from "../components/menu/Background"
import CategoryList from "../components/menu/nav/CategoryList";
function Menu({ item }) {
  useEffect(() => {
    if (item) {
      console.log(item.params.slug);
    } else {
      console.log(item);
    }
  }, [item]);
  return <main className="menu"> 
    <p>menu</p>
    <Background/>
    <CategoryList/>
    <p id="pog">asdsasda</p>
    </main>;
}

export default Menu;
