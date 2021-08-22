import React, { useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import { useSelector, useDispatch } from "react-redux";
import { changeForcedNumber } from "../../../actions";

const CategoryItem = React.forwardRef((props, ref) => {
  const { text, where, index, classes } = props;
  const visibilityInt = useSelector((state) => state.visibilityInt);
  const forcedNumber = useSelector((state) => state.forcedNumber);
  const dispatch = useDispatch();
  
  // scrols to correct category on click, using smooth scroll
  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -180;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };

  useEffect(() => {
    if (visibilityInt === index && ref && forcedNumber === -1) {
      ref.current.scrollIntoView({
        behavior: "auto",
        block: "nearest",
        inline: "center",
      });
    }
  }, [index, ref, visibilityInt, forcedNumber]);

  const handleClick = () => {
    if (ref.current) {
      dispatch(changeForcedNumber(index));
      ref.current.scrollIntoView({
        behavior: "auto",
        block: "nearest",
        inline: "center",
      });
    }
  };
  //
  return (
    <HashLink
      className={`button-nav ${classes} ${
        // first situation is when user has not clciked
        forcedNumber === -1
          ? visibilityInt === index
            ? "button-nav-active"
            : "button-nav-inactive"
          : forcedNumber === index
          ? "button-nav-active"
          : "button-nav-inactive"
      }
      `}
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
