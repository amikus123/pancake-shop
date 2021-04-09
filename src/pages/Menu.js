import React, { useEffect, useRef, useState } from "react";
import Background from "../components/menu/Background";
import CategoryList from "../components/menu/nav/CategoryList";
import PancakesFull from "../components/menu/products/PancakesFull";

// custom hook for observer
const useOnScreen = (options) => {
  // apends to lsit to the op
  const ref = useRef();
  const [listOnTop, setListOnTop] = useState(true);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setListOnTop(entry.isIntersecting);
    }, options);
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if(ref.current){
        observer.unobserve(ref.current)
      }
    };
  }, [options, ref]);
  return [ref,listOnTop]
};

function Menu({ item }) {
  // used to show correct modal
  useEffect(() => {
    if (item) {
      console.log(item.params.slug);
    } else {
      console.log(item);
    }
  }, [item]);
  // intersection observer for bg

  const [ref, listOnTop] = useOnScreen({threshold:0.5})
  return (
    <main className="menu">
      <Background ref={ref}/>
      <CategoryList sticky={!listOnTop}/>
      <PancakesFull/>
      <p id="pog">{listOnTop?"asdasd":"11111"}</p>
    </main>
  );
}

export default Menu;
