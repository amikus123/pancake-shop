import React, { useEffect, useState } from "react";
import CategoryItem from "./CategoryItem";
import { useSelector,shallowEqual  } from "react-redux";

function CategoryList({ sticky }) {
  const visibility = useSelector((state) => [...state.visibility] );

  const categories = useSelector((state) => state.categories);
  const [biggest, setBiggest] = useState(0);
  
 

  useEffect(() => {
    // setBiggest(visibility.indexOf(Math.max.apply(null, visibility)));
    let biggestNum =-1;
    let index = 0;
    visibility.forEach((item, arrIndex)=>{
      if(item>biggestNum){
        biggestNum = item;
        index = arrIndex
      }
    })
    setBiggest(index)
    console.log(biggest,"BIG", visibility)
  }, [setBiggest, visibility,biggest]);



  return (
    <div className="save-padding">
      <div
        className={`menu-nav ${
          sticky ? "menu-nav-sticky" : "menu-nav-relative"
        }`}
      >
        <div className="menu-nav-list">
          {categories.map((item, index) => {
            return (
              <CategoryItem
                text={item.category}
                where={"#" + item.category}
                key={index}
                // inView={visibility[index]}
                inView={index === biggest ? true : false}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default CategoryList;
