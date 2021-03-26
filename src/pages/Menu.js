import React, { useEffect } from "react";

function Menu({ item }) {
  useEffect(() => {
    if (item) {
      console.log(item.params.slug);
    } else {
      console.log(item);
    }
  }, [item]);
  return <>
    <p>menu</p>
    </>;
}

export default Menu;
