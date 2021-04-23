import React, {useEffect, useRef, useState } from "react";

import Background from "../components/menu/Background";
import CategoryList from "../components/menu/nav/CategoryList";
import PancakesFull from "../components/menu/products/PancakesFull";

// custom hook for observer
const useOnScreen = (options) => {
  // apends to lsit to the op
  const refTop = useRef();
  const [listOnTop, setListOnTop] = useState(true);
  useEffect(() => {
    // avoid lint mistake of changing drugin execution
    const temp = refTop.current;
    const observer = new IntersectionObserver(([entry]) => {
      setListOnTop(entry.isIntersecting);
    }, options);
    if (temp) {
      observer.observe(temp);
    }
    return () => {
      if(temp){
        observer.unobserve(temp)
      }
    };
  }, [options, refTop]);
  return [refTop,listOnTop]
};
// set up of categories


function Menu() {

  // intersection observer for bg
  const [refTop, listOnTop] = useOnScreen({threshold:0.5})
  
  return (
    <div className="menu main">
      <Background ref={refTop}/>
      <CategoryList sticky={!listOnTop}/>
      <PancakesFull />
    </div>
  );
}

export default Menu;
