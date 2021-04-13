import React, { useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";
import { useSelector } from "react-redux";

const CategoryItem = React.forwardRef((props, ref) => {
  const { text, where, inView, index, classes } = props;
  const [center, setCenter] = useState(false);
  const visibilityInt = useSelector((state) => state.visibilityInt);
  // scrols to correct category on click
  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -180;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };

  useEffect(() => {
    console.log("RERENDER")

    if((visibilityInt === index) && ref){
        console.log("srodkuk w")
        ref.current.scrollIntoView({
          behavior: 'instant',
          inline : 'center',
          block:"nearest"
        });
   

   
  }}, [index,ref,visibilityInt]);
  const handleClick = () => {
    console.log(1, ref.current);
    const element = ref.current
    if (ref.current) 
    {
    setTimeout(()=>{
      console.log(1, element);
      const options = { behavior: 'instant', block: 'nearest', inline: 'center' }
            element.scrollIntoView(options);
          },0)
        }
  };
  return (
    <HashLink
      className={`button-nav ${classes} ${
        (visibilityInt === index) ? "button-nav-active" : "button-nav-inactive"
      }`}
      to={where}
      scroll={scrollWithOffset}
      onClick={handleClick}
      ref={ref}
    >
      <span>{text.toUpperCase()}</span>
    </HashLink>
  );
});

export default CategoryItem;

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
