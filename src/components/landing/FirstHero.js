import React from "react";
import Button from "../Button";

function FirstHero() {
  return (
    <div className="first-hero">
      <div className="content-wrap">
        <h1 className="show-mobile"> Expierience pancakes anew</h1>
        <h1 className="hide-mobile"> Panckes redifined</h1>
        <p className="hide-mobile">
          Our mission is to show that pancakes are no doubt the best type of pan
          and cake alike.
        </p>

        <Button text={"ORDER NOW"} location={"/menu"} type={"red"} />

      </div>
    </div>
  );
}

export default FirstHero;
// 943