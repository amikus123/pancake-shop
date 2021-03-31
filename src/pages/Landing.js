import React from "react";
import CardGallery from "../components/carousel/CardGallery";
import Gallery from "../components/carousel/Gallery";
import FinalCTA from "../components/landing/FinalCTA";
import FirstHero from "../components/landing/FirstHero";
import Reviews from "../components/landing/Reviews";
import SecondHero from "../components/landing/SecondHero";
import ThirdHero from "../components/landing/ThirdHero";
import ProductFrame from "../components/ProductFrame";
import PromotedItems from "../components/PromotedItems";
import Review from "../components/review/Review";
import pancakes from "../data/pancakes";
import reviews from "../data/reviews";

function Landing() {
  return (
    <>
      <main className="landing">
        <FirstHero />
        {/* <ProductFrame product={pancakes[0]}/> */}
        {/* <Review data={reviews[0]} />
        <Review data={reviews[1]} />
        <Review data={reviews[2]} /> */}
      <Reviews/>
        <PromotedItems products={pancakes} />
        <SecondHero />
        <ThirdHero />
        <CardGallery />
        
        <FinalCTA />
      </main>
    </>
  );
}

export default Landing;
