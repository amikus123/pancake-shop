import React from 'react'
import Button from '../general/Button'
import Menu from '../../pages/Menu'

function FinalCTA() {
  return (
    <section className="final-cta">
      <div className="text-wrap">
        <h3>Get 10% off on first order</h3>
        <p className="show-desktop"> 
Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <Button text="ORDER NOW" location="/menu" component={Menu}/>
      </div>
    </section>
  )
}

export default FinalCTA
