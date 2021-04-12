import React, { useEffect } from "react";
import ProductFrame from "../../general/ProductFrame";
import { useInView } from "react-intersection-observer";
import { changeListVisibleBools } from "../../../actions";

import { useSelector, useDispatch } from "react-redux";

function PancakeCategory({ data, update, index }) {
  const visibility = useSelector((state) => [...state.visibility]);
  const visibilityBools = useSelector((state) => [...state.visibilityBools]);
  const dispatch = useDispatch();

  const { list, category } = data;
  let { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: [0, 0, 1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
    rootMargin: "-200px 0px 0px 0px",
    // delay:100,
  });
 
  useEffect(() => {
  
    const firstTruth = (arr) => {
      let temp = 0;
      arr.forEach((item, index) => {
        if (item) {
          temp = index;
        }
      });
      return temp;
    };
    const biggest = (arr) => {
      let biggestNum = -1;
      let index = 0;
      arr.forEach((item, arrIndex) => {
        if (item > biggestNum) {
          biggestNum = item;
          index = arrIndex;
        }
      });
      return index;
    };
    const updateBools = () => {
      const clone = [...visibilityBools];
      clone[firstTruth(visibilityBools)] = false;
      clone[biggest(visibility)] = true;
      dispatch(changeListVisibleBools(clone));
    };
    // changes the raw data
    if (entry) {
      if ((Number(entry.intersectionRatio.toPrecision(10)) !==visibility[index])){
  
      if (inView  ) {
        console.log(
          visibility[index],
          Number(entry.intersectionRatio.toPrecision(10))
        );
        update(Number(entry.intersectionRatio.toPrecision(10)));
      } else {
        update(0);
        console.log(
          visibility[index],
          Number(entry.intersectionRatio.toPrecision(10)),
          "zeruje"
        );
      }
    }
    if (firstTruth(visibilityBools) !== biggest(visibility)) {
      console.log(firstTruth(visibilityBools), biggest(visibility));
      updateBools();
    }
  }
  }, [inView, update, entry,index,visibilityBools,visibility,dispatch]);

  return (
    <section className="category" id={category} ref={ref}>
      <div className="category-heading">
        <h2> {category}</h2>
        {/* <h2>{`Header inside viewport ${inView}.`}</h2> */}
        {/* <h2>{entry?entry.intersectionRatio:null}</h2> */}
      </div>
      <div className="category-content">
        {list.map((item, index) => {
          // return <PancakeSquare data={item} key={index} />
          return <ProductFrame product={item} key={index} />;
        })}
      </div>
    </section>
  );
}

export default PancakeCategory;
