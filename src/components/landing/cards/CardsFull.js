import React from 'react'
import Card from "./CardsItem";
import cards from "../../../data/cardsData";function CardsFull() {
  return (
    <div className="show-desktop cards-full" >
      <Card card={cards[0]}/>
      <Card card={cards[1]}/>
      <Card card={cards[2]}/>

    </div>
  )
}

export default CardsFull 
