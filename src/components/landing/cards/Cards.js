import React,{useState} from 'react';
import CardsControl from './CardsControl';
import IconsRow from "./CardsIconsRow";
import CardsFull from "./CardsFull";
import CardsControl2 from "./CardsControl2";

function Cards() {
  const [number,setNumber] = useState(1)
  return (
    <section className="cards ">
      <h2>What makes us Special</h2>
      <IconsRow fun={setNumber} number={number}/>
      {/* <CardsControl number={number}/> */}
      <CardsControl2 number={number}/>
      
      <CardsFull/>
    </section>
  )
}

export default Cards
