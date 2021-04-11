import React, { useEffect } from "react";
import CategoryItem from "./CategoryItem";
import { useSelector } from "react-redux";

function CategoryList({ sticky }) {
  const visibility = useSelector((state) => state.visibility);
  const categories = useSelector((state) => state.categories);

  useEffect(() => {
    // stores categories, used for comparing
  }, []);
  return (
    <div className="save-padding">
      <div
        className={`menu-nav ${
          sticky ? "menu-nav-sticky" : "menu-nav-relative"
        }`}
      >
        <div className="menu-nav-list">
          <div className="hidden-layer"></div>
          {categories.map((item, index) => {
            return (
              <CategoryItem
                text={item.category}
                where={"#" + item.category}
                key={index}
                inView={visibility[index]}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default CategoryList;
