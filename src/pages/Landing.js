import React from "react";
import CardGallery from "../components/carousel/CardGallery";
import FinalCTA from "../components/landing/FinalCTA";
import FirstHero from "../components/landing/FirstHero";
import SecondHero from "../components/landing/SecondHero";
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
        {/* <SecondHero/> */}
        <CardGallery/>
        <FinalCTA/>
      </main>
    </>
  );
}

export default Landing;
