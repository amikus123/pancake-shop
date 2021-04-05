import React from 'react'
import Card from "./Card";
import cards from "../../../data/cards";function CardsFull() {
  return (
    <div className="show-desktop cards-full" >
      <Card card={cards[0]}/>
      <Card card={cards[1]}/>
      <Card card={cards[2]}/>

    </div>
  )
}

export default CardsFull 
