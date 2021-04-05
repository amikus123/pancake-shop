import React from "react";
import Man from "../../images/landing/TH-desktop.png";
import MobileMan from "../../images/landing/TH-mobile.png";
import Man2 from "../../images/landing/test2.png";

function ThirdHero() {
  return (
    <section className="third-hero">
       <div className="third-img">
        <img src={Man2} alt="man" className="first"/>
        {/* <a href="https://www.freepik.com/photos/business">Business photo created by freepik - www.freepik.com</a> young male */}
        <img src={MobileMan} alt="" className="second"/>
        {/* <a href="https://www.freepik.com/photos/fashion">Fashion photo created by benzoix - www.freepik.com</a> */}

      </div>
      <div className="text-wrap">
        <h2 className="hide-desktop">Made by very best </h2>
        <h2 className="show-desktop">
        Cooked by the Best Chiefs in the World
        </h2>
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
