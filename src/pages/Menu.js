import React, { useEffect, useRef, useState } from "react";
import Background from "../components/menu/Background";
import CategoryList from "../components/menu/nav/CategoryList";

// custom hook for observer
const useOnScreen = (options) => {
  const ref = useRef();
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setVisible(entry.isIntersecting);
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
  return [ref,visible]
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

  const [ref, visible] = useOnScreen({threshhold:1.0})
  return (
    <main className="menu">
      <Background ref={ref}/>
      <CategoryList />
      <p id="pog">{visible?"asdasd":"11111"}</p>
    </main>
  );
}

export default Menu;
