import React from "react";
import ProductFrame from "../../general/ProductFrame";
import PancakeSquare from "./PancakeSquare";

function PancakeCategory({ data }) {
  const { list, category } = data;
  return (
    <section className="category" id={category}>
      <div className="category-heading" >
        <h2> {category}</h2>
      </div>
      <div className="category-content">
        { list.map((item,index)=>{
          // return <PancakeSquare data={item} key={index} />
          return <ProductFrame product={item} key={index} />
        })}
      </div>
    </section>
  );
}

export default PancakeCategory;
