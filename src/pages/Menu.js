import React, { useEffect } from "react";
import Header from "../components/Header";

function Menu({ item }) {
  useEffect(() => {
    if (item) {
      console.log(item.params.slug);
    } else {
      console.log(item);
    }
  }, [item]);
  return <div>
    <Header/>
    <p>menu</p>
    </div>;
}

export default Menu;
