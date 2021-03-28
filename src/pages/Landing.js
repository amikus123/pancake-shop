import React from "react";
import Gallery from "../components/carousel/Gallery";
import FirstHero from "../components/landing/FirstHero";
import SecondHero from "../components/landing/SecondHero";
import ProductFrame from "../components/ProductFrame";
import pancakes from "../data/pancakes";
function Landing() {
  return (
    <>
      <main className="landing">
        <FirstHero />
        {/* <ProductFrame product={pancakes[0]}/> */}
        <Gallery products={pancakes} />
        <SecondHero/>
      </main>
    </>
  );
}

export default Landing;
