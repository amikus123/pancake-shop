import React from 'react';
import Button from '../Button';
import Woman from "../../images/woman.png";
function SecondHero() {
  return (
    <section className="second-hero">
    <div className="image-con">
    <img src={Woman} alt=""/>
    {/* <svg width="638" height="586" viewBox="0 0 638 586" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M307.802 42.8624C377.779 39.3789 450.366 -24.4021 510.476 11.6849C569.897 47.3588 555.392 137.694 576.122 203.948C596.557 269.264 658.26 333.884 630.909 396.605C603.263 460.004 514.396 461.133 451.526 489.677C403.792 511.349 358.783 531.156 307.802 543.3C239.4 559.593 164.853 607.919 104.108 572.431C43.8876 537.25 48.5638 449.148 30.9267 381.545C14.4894 318.542 -10.8683 255.869 5.04609 192.731C21.5811 127.13 58.7269 61.1167 119.243 31.1605C177.125 2.50817 243.329 46.0719 307.802 42.8624Z" fill="#DDA157"/>
</svg> */}

    </div>
<div className="text">
    <h1>
    Qualityy over quantity
    </h1>
    <p>
    Turpis nisl elit amett, amet, eu. Bibendum scelerisque pretium, scelerisque adipiscing curabitur morbi.
    </p>
    <Button text="ORDER NOW"/>
</div>
    </section>
  )
}

export default SecondHero
