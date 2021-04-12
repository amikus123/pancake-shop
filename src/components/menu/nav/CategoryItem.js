import React, { useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import { useSelector  } from "react-redux";

// function CategoryItem({ type, classes, text, where, inView }) {
//   const scrollWithOffset = (el) => {
//     const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
//     const yOffset = -180;
//     window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
//   };
//   useEffect(() => {
//     console.log(inView);
//   }, [inView]);
//   return (
//     <>
//       {/* <a  className={`button-nav ${classes}`} href={where}>
//      asdasdasd
//     </a> */}
//       <HashLink
//         // className={`button-nav ${classes} ${
//         //   inView ? "button-nav-active" : "button-nav-inactive"
//         // }`}
//         // to={where}
//         // scroll={scrollWithOffset}
//       >
//         {/* <span>{text.toUpperCase()}</span> */}
//         <p>sad</p>
//       </HashLink>
//     </>
//   );
// }
const CategoryItem = React.forwardRef((props, ref) => {
  const { onClick, text, where, inView,index, classes } = props;
  const visibilityBools= useSelector((state) => [...state.visibilityBools] );

  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -180;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };
  useEffect(() => {

    if(visibilityBools[index]){
      console.log("srodkuk")
      ref.current.scrollIntoView({
        // behavior: 'smooth',
        inline : 'center',
        block :"center"
      });
    }

  }, [inView]);

  return (
    <HashLink
      className={`button-nav ${classes} ${
        inView ? "button-nav-active" : "button-nav-inactive"
      }`}
      to={where}
      scroll={scrollWithOffset}
      onClick={onClick}
      ref={ref}
    >
      <span>{text.toUpperCase()}</span>
    </HashLink>
  );
});

export default CategoryItem;
