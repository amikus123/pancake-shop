import React from 'react'
import Button from '../Button'

function FinalCTA() {
  return (
    <div className="final-cta">
      <div className="text-wrap">
        <h4>Get 10% off on first order</h4>
        <Button text="ORDER NOW" to="/menu"/>
      </div>
    </div>
  )
}

export default FinalCTA
