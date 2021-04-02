import React, {useEffect,useState} from 'react'
import Card from './Card'
import cards from "../../../data/cards";
import FirstHero from '../FirstHero';
function  CardsControl({number}) {
 const [first,setFirst] = useState({num:0,classes:""})
 const [second,setSecond] = useState({num:0,classes:"second second-hide"})


  useEffect(()=>{
    console.log(number,"number");
    setSecond({num:number-1,classes:"second second-show"})
    const timeout = setTimeout(()=>{
      first.num = number-1;
      setSecond({num:number-1,classes:"second second-hide"})
      console.log(2)
    },400)
    return () => clearTimeout(timeout);

  },[number])
  useEffect(()=>{
    setSecond({num:number-1,classes:"second second-hide"})

  },[])

  return (
    <div className="cards-control">
      <Card card={cards[first.num] } classes={first.classes}/>
      {/*  there will be current and the next one */}
      <Card card={cards[second.num]} classes={second.classes}/>

    </div>
  )
}

export default CardsControl
