import React, { useEffect } from "react";
import ProductFrame from "../../general/ProductFrame";
import { useInView } from "react-intersection-observer";
import { changeVisibleInt, changeListVisible,changeForcedNumber} from "../../../actions";

import { useSelector, useDispatch } from "react-redux";

function PancakeCategory({ data, update, index }) {
  const visibility = useSelector((state) => [...state.visibility]);
  const visibilityInt = useSelector((state) => {
    return state.visibilityInt;
  });
  const forcedNumber = useSelector((state) => state.forcedNumber);

  const dispatch = useDispatch();

  const { list, category } = data;
  let { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: [0, 0, 1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
    rootMargin: "0px 0px 0px 0px",
    delay:100,
    trackVisibility:true

  });

  useEffect(() => {
    const biggest = (arr) => {
      let biggestNum = Math.max(...arr);
      return { index: arr.indexOf(biggestNum), val: biggestNum };
    };

    // prevents the crash when the emtry is und
    if (entry) {
        console.log(entry) 

      // nie zmieniam danych jesli sa takie same
      if (
        Number(entry.intersectionRatio.toPrecision(10)) !== visibility[index]
      ) {

        // console.log(entry.intersectionRatio.toPrecision(10),visibility[index], entry.intersectionRatio.toPrecision(10) !== visibility[index]);
        dispatch(
          changeListVisible(
            index,
            Number(entry.intersectionRatio.toPrecision(10))
          )
        );
      }
      // update visible int
      if (biggest(visibility).index !== visibilityInt) {
        // console.log(biggest(visibility).index,visibilityInt,biggest(visibility).index !== visibilityInt );
        console.log("pwwinno sie zmienic")
        dispatch(changeVisibleInt(biggest(visibility).index));
      }
      if(biggest(visibility).index === forcedNumber){
        dispatch(changeForcedNumber(-1));

      }
    }
  }, [inView, update, entry, index, visibility, visibilityInt, dispatch,forcedNumber]);

  return (
    <section className="category" id={category} ref={ref}>
      <div className="category-heading">
        <h2> {category}</h2>
      </div>
      <div className="category-content">
        {list.map((item, index) => {
          return <ProductFrame product={item} key={index} />;
        })}
      </div>
    </section>
  );
}

export default PancakeCategory;
