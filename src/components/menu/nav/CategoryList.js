import React from "react";
import CategoryItem from "./CategoryItem";
import { useSelector } from "react-redux";

function CategoryList({ sticky }) {
  const categories = useSelector((state) => state.categories);
  return (
    <div className="save-padding">
      <div
        className={`menu-nav ${
          sticky ? "menu-nav-sticky" : "menu-nav-relative"
        }`}
      >
        <div className="menu-nav-list">
          {categories.map((item, index) => {
            const ref = React.createRef();
            return (
              <CategoryItem
                ref={ref}
                text={item.category}
                where={"#" + item.category}
                key={index}
                index={index}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default CategoryList;
