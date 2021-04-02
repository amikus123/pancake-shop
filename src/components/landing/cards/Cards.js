import React,{useState} from 'react';
import CardsControl from './CardsControl';
import IconsRow from "./IconsRow";
function Cards() {
  const [number,setNumber] = useState(1)
  return (
    <section className="cards">
      <h2>What makes us Special</h2>
      <IconsRow fun={setNumber} number={number}/>
      <CardsControl number={number}/>
    </section>
  )
}

export default Cards
