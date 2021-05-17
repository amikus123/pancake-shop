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
    rootMargin: "64px 0px 0px 0px",
    delay:500,
  });

  useEffect(() => {
    const biggest = (arr) => {
      let biggestNum = Math.max(...arr);
      return { index: arr.indexOf(biggestNum), val: biggestNum };
    };

    // prevents the crash when the entry is undefined
    if (entry) {
      if(entry.intersectionRect.height !==0){
      }
      // nie zmieniam danych jesli sa takie same
      if (
        entry.intersectionRect.height !== visibility[index]
      ) {

        dispatch(
          changeListVisible(
            index,
            entry.intersectionRect.height
          )
        );
      }
      // update visible int
      if (biggest(visibility).index !== visibilityInt) {
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
