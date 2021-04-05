import React from 'react'
import Button from '../general/Button'

function FinalCTA() {
  return (
    <div className="final-cta">
      <div className="text-wrap">
        <h3>Get 10% off on first order</h3>
        <Button text="ORDER NOW" to="/menu"/>
      </div>
    </div>
  )
}

export default FinalCTA
