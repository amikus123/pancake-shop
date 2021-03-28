import React, { useState, useEffect, useCallback } from "react";
import ProductFrame from '../ProductFrame'
import { useEmblaCarousel } from "embla-carousel/react";
import { PrevButton, NextButton } from "./Buttons";

function Gallery({products}) {
  const [viewportRef, embla] = useEmblaCarousel({ align: "center" });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const onSelect = useCallback(() => {
    if (!embla) return;
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    embla.on("select", onSelect);
    onSelect();
  }, [embla, onSelect]);


  return (
    // <div>
    //   <ProductFrame product = {products[0]}/>
    //   <ProductFrame product = {products[1]}/>
    //   <ProductFrame product = {products[2]}/>

    // </div>
     <div className="embla">
     <div className="embla__viewport" ref={viewportRef}>
       <div className="embla__container">
         {products.map((prod,index) => (
           <div className="embla__slide" key={index}>
             <div className="embla__slide__inner">
                <ProductFrame product={prod}/>
             </div>
           </div>
         ))}
       </div>
     </div>
     <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
      <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
   </div>
  )
}

export default Gallery
