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
  return <>
    <Header/>
    <p>menu</p>
    </>;
}

export default Menu;
