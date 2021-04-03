import React from "react";
import Man from "../../images/landing/TH-desktop.png";
import MobileMan from "../../images/landing/TH-mobile.png";

function ThirdHero() {
  return (
    <section className="third-hero">
       <div className="third-img">
        <img src={Man} alt="man" className="first"/>
        {/* <a href="https://www.freepik.com/photos/business">Business photo created by freepik - www.freepik.com</a> young male */}
        <img src={MobileMan} alt="" className="second"/>
        {/* <a href="https://www.freepik.com/photos/fashion">Fashion photo created by benzoix - www.freepik.com</a> */}

      </div>
      <div className="text-wrap">
        <h2>Made by very best </h2>
        <p>We makesure that our cooks are very skilled at their craft</p>
        <ul>
          <li>Years of expierience</li>
          <li>A lot of passsion and dedication</li>
          <li className="hide-mobile">Expierience unmatched in the industry</li>
          <li className="show-mobile">Original recipies</li>
        </ul>
        
      </div>

     
    </section>
  );
}

export default ThirdHero;
