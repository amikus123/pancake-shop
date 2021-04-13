import React, { useEffect } from "react";
import ProductFrame from "../../general/ProductFrame";
import { useInView } from "react-intersection-observer";
import { changeVisibleInt, changeListVisible } from "../../../actions";

import { useSelector, useDispatch } from "react-redux";

function PancakeCategory({ data, update, index }) {
  const visibility = useSelector((state) => [...state.visibility]);
  const visibilityInt = useSelector((state) => {
    return state.visibilityInt;
  });
  const dispatch = useDispatch();

  const { list, category } = data;
  let { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: [0, 0, 1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
    rootMargin: "-200px 0px 0px 0px",
    // delay:100,
  });

  useEffect(() => {
    const biggest = (arr) => {
      let biggestNum = Math.max(...arr);
      // console.log(biggestNum, arr.indexOf(biggestNum), arr, "dasads");
      return { index: arr.indexOf(biggestNum), val: biggestNum };
    };

    // prevents the crash when the emtry is und
    if (entry) {
      // nie zmieniam danych jesli sa takie same
      // console.log("test", visibility);

      if (
        Number(entry.intersectionRatio.toPrecision(10)) !== visibility[index]
      ) {
        dispatch(
          changeListVisible(
            index,
            Number(entry.intersectionRatio.toPrecision(10))
          )
        );
      }
      // update visible int
      // console.log(biggest(visibility),visibilityInt, )
      if (biggest(visibility).index !== visibilityInt) {
        console.log(visibility,visibilityInt,"pded")``
        dispatch(changeVisibleInt(biggest(visibility).index));
        console.log(visibility,visibilityInt,"po")

      }
    }
  }, [inView, update, entry, index, visibility, visibilityInt, dispatch]);

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
