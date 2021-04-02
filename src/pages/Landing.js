import React from "react";
import FinalCTA from "../components/landing/FinalCTA";
import FirstHero from "../components/landing/FirstHero";
import Reviews from "../components/landing/Reviews";
import SecondHero from "../components/landing/SecondHero";
import ThirdHero from "../components/landing/ThirdHero";
import PromotedItems from "../components/landing/PromotedItems";
import Cards from "../components/landing/cards/Cards";

function Landing() {
  return (
    <>
      <main className="landing">
        <FirstHero />
        <Cards />
        <SecondHero />
        <PromotedItems />
        <Reviews />
        <ThirdHero />
        <FinalCTA />
      </main>
    </>
  );
}

export default Landing;
