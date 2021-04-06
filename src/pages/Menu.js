import React, { useEffect, useRef, useState } from "react";
import Background from "../components/menu/Background";
import CategoryList from "../components/menu/nav/CategoryList";

// custom hook for observer
const useOnScreen = (options) => {
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
      <p id="pog">{listOnTop?"asdasd":"11111"}</p>
    </main>
  );
}

export default Menu;
