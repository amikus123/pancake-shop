import React from "react";
import Menu from "../../pages/Menu";
import Button from "../general/Button";

function FirstHero() {
  return (
    <section className="first-hero">
      <div className="content-wrap">
        <h1 className="show-mobile"> Expierience pancakes anew</h1>
        <h1 className="hide-mobile"> Panckes redifined</h1>
        <p className="hide-mobile">
          Our mission is to show that pancakes are no doubt the best type of pan
          and cake alike.
        </p>
        <Button
          text={"ORDER NOW"}
          location={"/menu"}
          component={Menu}
          type={"red"}
        />
      </div>
    </section>
  );
}

export default FirstHero;
// 943
