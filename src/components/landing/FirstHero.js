import React from 'react'
import Button from '../Button'

function FirstHero() {
  return (
    <div className="first-hero">
      <div className="content-wrap">
      <h1> Expierience pancakes anew</h1>
      <Button  text={"ORDER NOW"} location={"/menu"} type={"red"} />
      </div>
     
    </div>
  )
}

export default FirstHero
