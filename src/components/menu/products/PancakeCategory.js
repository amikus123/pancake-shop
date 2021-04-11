import React, { useEffect } from "react";
import ProductFrame from "../../general/ProductFrame";
import { useInView  } from 'react-intersection-observer';

function PancakeCategory({ data,update,vis }) {

  const { list, category } = data;
  let { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: [0,0,1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1],
    rootMargin: "-130px 0px 0px 0px",
    // delay:100,
  });
  useEffect(()=>{
    // console.log( inView, entry)
    if(entry){
      if(inView){
        update(Number(entry.intersectionRatio.toPrecision(10)))
      }else{
        update(0)
      }
      // console.log(entry)
    }
  },[inView,update,entry])

  return (
       <section className="category" id={category} ref={ref}>
       <div className="category-heading" >
         <h2> {category}</h2>
         <h2>{`Header inside viewport ${inView}.`}</h2>
         <h2>{entry?entry.intersectionRatio:null}</h2>

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
