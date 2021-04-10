import React from "react";
import { HashLink } from 'react-router-hash-link';

function CategoryItem({ type, classes, text, where, active }) {
  return (
    // <a >
    //  
    // </a>
  <HashLink className={`button-nav ${classes}`} to={where}>

<span>{text.toUpperCase()}</span>
  </HashLink>
  );
}

export default CategoryItem;
