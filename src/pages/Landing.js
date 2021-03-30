import React from "react";
import CardGallery from "../components/carousel/CardGallery";
import FinalCTA from "../components/landing/FinalCTA";
import FirstHero from "../components/landing/FirstHero";
import Reviews from "../components/landing/Reviews";
import SecondHero from "../components/landing/SecondHero";
import ThirdHero from "../components/landing/ThirdHero";
import ProductFrame from "../components/ProductFrame";
import PromotedItems from "../components/PromotedItems";
import pancakes from "../data/pancakes";
function Landing() {
  return (
    <>
      <main className="landing">
        <FirstHero />
        {/* <ProductFrame product={pancakes[0]}/> */}

        <PromotedItems products={pancakes} />
        <SecondHero/>
        <Reviews/>
        <ThirdHero/>
        <CardGallery/>
        <FinalCTA/>
      </main>
    </>
  );
}

export default Landing;
