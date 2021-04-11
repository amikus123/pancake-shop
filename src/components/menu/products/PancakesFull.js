import React from "react";
import PancakeCategory from "./PancakeCategory";
import { useSelector } from "react-redux";
import { changeListVisible } from "../../../actions";
import { useDispatch } from "react-redux";

function PancakesFull({ tholds, setTholds }) {
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  const updateSingle = (index) => {
    const res = (val) => {
      dispatch(changeListVisible(index,val))
      console.log("ZMIANA", tholds);
    };
    return res;
  };
  return (
    <div className="menu-container">
      {categories.map((category, index) => {
        return (
          <PancakeCategory
            data={category}
            key={index}
            update={updateSingle(index)}
            vis={tholds[index] + ""}
          />
        );
      })}
    </div>
  );
}

export default PancakesFull;
