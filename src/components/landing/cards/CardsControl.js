import React from "react";
import Card from "./CardsItem";
import cards from "../../../data/cardsData";
function CardsControl({ number }) {

const changePosistion = (num) =>{
  if(num===1) return "left";
  if(num===2) return "center";
  else return "right";

}

  return (
    <div className="cards-window hide-desktop">

    <div className={`cards-control-2  ${changePosistion(number)} `}>
      <Card card={cards[0]}/>
      <Card card={cards[1]}/>
      <Card card={cards[2]}/>
    </div>
    </div>

  );
}

export default CardsControl;
