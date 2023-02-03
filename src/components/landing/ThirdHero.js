import React from "react";
import MobileMan from "../../images/landing/third-hero/third-hero-mobile.png";
import DesktopMan from "../../images/landing/third-hero/third-hero-desktop.png";

function ThirdHero() {
  return (
    <section className="third-hero">
      <div className="third-img">
        <img src={DesktopMan} alt="man" className="first" />
        <img src={MobileMan} alt="man" className="second" />
      </div>
      <div className="text-wrap">
        <h2 className="hide-desktop">Made by very best </h2>
        <h2 className="show-desktop">Cooked by the Best Chiefs in the World</h2>
        <p>We make sure that our cooks are very skilled at their craft</p>
        <ul>
          <li>Years of expierience</li>
          <li>A lot of passsion and dedication</li>
          <li className="hide-mobile">Recipies unmatched in the industry</li>
          <li className="show-mobile">Original recipies</li>
        </ul>
      </div>
    </section>
  );
}

export default ThirdHero;
