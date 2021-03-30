import React from 'react';
import Button from '../Button';
import Woman from "../../images/landing/SH.png";
function SecondHero() {
  // https://freedesignfile.com/380895-pretty-female-cook-stock-photo-07/
  return (
    <section className="second-hero">
    <div className="image-con">
    <img src={Woman} alt=""/>
    </div>
<div className="text">
    <h2>
    Qualityy over quantity
    </h2>
    <p>
    Turpis nisl elit amett, amet, eu. Bibendum scelerisque pretium, scelerisque adipiscing curabitur morbi.
    </p>
    <Button text="ORDER NOW"/>
</div>
    </section>
  )
}

export default SecondHero
