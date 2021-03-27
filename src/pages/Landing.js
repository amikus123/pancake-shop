import React from 'react'
import FirstHero from '../components/landing/FirstHero'
import ProductFrame from '../components/ProductFrame'
import pancakes from "../data/pancakes"
function Landing() {
  return (
    <>
      <main>
     <FirstHero/>
     <ProductFrame product={pancakes[0]}/>
      </main>
    </>
  )
}

export default Landing
