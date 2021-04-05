import React from 'react'
import Button from '../Button'
import Gallery from './carousel/Gallery'
import Menu from "../../pages/Menu";

function PromotedItems() {
  return (
    <div className="promoted-items">
      <h3>
      Our best pancakes
      </h3>
      <p>
      Made with indigirents with of best quality
      </p>
       <Gallery />
       <Button text={"MORE PANCAKES"} location={"/menu"} component={Menu} type={"trans"} />
  </div>
  )
}

export default PromotedItems
