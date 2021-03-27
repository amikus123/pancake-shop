import React, { useEffect } from "react";

function Menu({ item }) {
  useEffect(() => {
    if (item) {
      console.log(item.params.slug);
    } else {
      console.log(item);
    }
  }, [item]);
  return <main>
    <p>menu</p>
    </main>;
}

export default Menu;
