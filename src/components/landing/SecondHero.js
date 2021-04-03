import React from 'react';
import Button from '../Button';
import Woman from "../../images/landing/SH.png";
function SecondHero() {
  // https://freedesignfile.com/380895-pretty-female-cook-stock-photo-07/
  return (
    <section className="second-hero">
   

<div className="text">
    <h2>
    Qualityy over quantity
    </h2>
    <p>
    Our motto is to focus on quality, rather on quantity.
    </p>
    <Button text="ORDER NOW"/>
</div>
<div className="image-con">
    <img src={Woman} alt=""/>
    </div>
    </section>
  )
}

export default SecondHero
