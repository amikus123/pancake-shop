import React, { useEffect } from "react";
import ProductFrame from "../../general/ProductFrame";
import { useInView,InView  } from 'react-intersection-observer';

function PancakeCategory({ data,update,vis }) {

  const { list, category } = data;
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.5,
  });
  useEffect(()=>{
    // console.log( inView, entry)
    if(entry){
      if(inView){
        update(entry.intersectionRatio)
      }else{
        update(0)

      }

    }
  },[inView,update,entry])
  return (
       <section className="category" id={category} ref={ref}>
       <div className="category-heading" >
         <h2> {category}</h2>
         <h2>{`Header inside viewport ${inView}.`}</h2>
         <h2>{vis}</h2>

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
