import React from "react";

function CategoryItem({ type, classes, text, where, active }) {
  return (
    <a className={`button-nav ${classes}`} href={where}>
      <span>{text.toUpperCase()}</span>
    </a>
  );
}

export default CategoryItem;
