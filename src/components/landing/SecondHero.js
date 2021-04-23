import React from 'react';
import Button from '../general/Button';
import Woman from "../../images/landing/second-hero/second-hero.png";
import Menu from "../../pages/Menu";

function SecondHero() {
  // https://freedesignfile.com/380895-pretty-female-cook-stock-photo-07/
  return (
    <section className="second-hero">
   

<div className="text">
    <h2>
    Qualityy over quantity
    </h2>
    <p className="hide-desktop">
    Our motto is to focus on quality, rather on quantity.
    </p>
    <p className="show-desktop">
    Turpis nisl elit amett, amet, eu. Bibendum scelerisque pretium, scelerisque adipiscing curabitur morbi. Nec vel vitae tellus auctor aliquam in lectus amet. Sit vulputate leo cras condimentum.
    </p>
    <Button text="ORDER NOW" location="/menu" component={Menu}/>
</div>
<div className="image-con">
    <img src={Woman} alt=""/>
    </div>
    </section>
  )
}

export default SecondHero
