import React from "react";

function CategoryItem({ type, classes, text, where }) {
  return (
    <a className={`button button__${type || "red"} ${classes}`} href={where}>
      <span>{text.toUpperCase()}</span>
    </a>
  );
}

export default CategoryItem;
