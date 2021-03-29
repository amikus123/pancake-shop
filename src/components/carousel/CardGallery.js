import React, { useState, useEffect, useCallback } from "react";
import { PrevButton, NextButton } from "./Buttons";
import { useEmblaCarousel } from "embla-carousel/react";
import { useRecursiveTimeout } from "./useRecursiveTimeout";

import cards from "../../data/cards";
import Card from "../Card";
function CardGallery() {
  const AUTOPLAY_INTERVAL = 4000;
  const [viewportRef, embla] = useEmblaCarousel();
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const autoplay = useCallback(() => {
    if (!embla) return;
    if (embla.canScrollNext()) {
      embla.scrollNext();
    } else {
      embla.scrollTo(0);
    }
  }, [embla]);

  const { play, stop } = useRecursiveTimeout(autoplay, AUTOPLAY_INTERVAL);

  const scrollNext = useCallback(() => {
    if (!embla) return;
    embla.scrollNext();
    stop();
  }, [embla, stop]);

  const scrollPrev = useCallback(() => {
    if (!embla) return;
    embla.scrollPrev();
    stop();
  }, [embla, stop]);

  const onSelect = useCallback(() => {
    if (!embla) return;
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    embla.on("select", onSelect);
    embla.on("pointerDown", stop);
  }, [embla, onSelect, stop]);

  useEffect(() => {
    play();
  }, [play]);

  return (
    <div className="embla-cards">
      <div className="embla-cards__viewport" ref={viewportRef}>
        <div className="embla-cards__container">
          {cards.map((card, index) => (
            <div className="embla-cards__slide" key={index}>
              <div className="embla-cards__slide__inner">
                <Card card={card} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
      <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
    </div>
  );
}

export default CardGallery;
