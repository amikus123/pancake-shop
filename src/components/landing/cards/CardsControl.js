import React, { useEffect, useState, useRef } from "react";
import Card from "./Card";
import cards from "../../../data/cards";
import FirstHero from "../FirstHero";
function CardsControl({ number }) {
  const [first, setFirst] = useState({ num: 0, classes: "first first-show" });
  const [second, setSecond] = useState({
    num: 0,
    classes: "second second-hide-right",
  });
  const prev = useRef(number);

  useEffect(() => {
    console.log(number, "number", prev);
    // side from which slide will appear
    let direction = "";
    if (prev.current > number) {
      direction = "left";
    } else {
      direction = "right";
    }
    setSecond({ num: number - 1, classes: `second second-hide-${direction}` });
    setFirst({ num: first.num, classes: "first first-hide" });
    prev.current = number;
    setTimeout(() => {
        setSecond({ num: number - 1, classes: `second second-show` });
      },  
      10);
    const timeout = setTimeout(() => {
      setFirst({ num: number - 1, classes: "first first-show" });
      setSecond({ num: number - 1, classes: "second second-show" });
      console.log(2);
    }, 300);
    return () => clearTimeout(timeout);
  }, [number]);
  useEffect(() => {
    setFirst({ num: number - 1, classes: "fisrt first-show" });
    setSecond({ num: number - 1, classes: "second second-show" });
  }, []);

  return (
    <div className="cards-control">
      <Card card={cards[first.num]} classes={first.classes} />
      {/*  there will be current and the next one */}
      <Card card={cards[second.num]} classes={second.classes} />
    </div>
  );
}

export default CardsControl;
