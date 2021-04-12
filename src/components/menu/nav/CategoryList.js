import React, { useEffect, useState } from "react";
import CategoryItem from "./CategoryItem";
import { useSelector  } from "react-redux";

function CategoryList({ sticky }) {
  const visibilityBools= useSelector((state) => [...state.visibilityBools] );
  const categories = useSelector((state) => state.categories);

  const [biggest, setBiggest] = useState(0);
  
 

  useEffect(() => {
    let temp = 0;
    visibilityBools.forEach((item,index)=>{
      if(item){
        temp = index
      }
    })
    setBiggest(temp)
  }, [setBiggest,biggest,visibilityBools]);

 
  // global bool "user has clicked?"
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
            // console.log(ref,index)
            const handleClick = () => {
                console.log(1,ref.current);
                 ref.current.scrollIntoView({
                  // behavior: 'smooth',
                  inline : 'center',
                  block :"center"
                });
               
            }
           
            return (
              <CategoryItem
              ref={ref}
              onClick={handleClick}
                text={item.category}
                where={"#" + item.category}
                key={index}
                inView={index === biggest ? true : false}
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
