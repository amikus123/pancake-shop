import React,{useEffect}from "react";
import { HashLink } from 'react-router-hash-link';

function CategoryItem({ type, classes, text, where,inView }) {
  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -180; 
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
}
useEffect(() => {
console.log(inView)
}, [inView])
  return (
    <>
    {/* <a  className={`button-nav ${classes}`} href={where}>
     asdasdasd
    </a> */}
  <HashLink className={`button-nav ${classes} ${inView?"button-nav-active":"button-nav-inactive"}`} to={where}  scroll={scrollWithOffset} >

<span>{text.toUpperCase()}</span>
  </HashLink>
  </>
  );
}

export default CategoryItem;
