import React from 'react'
import Gallery from './carousel/Gallery'

function PromotedItems({products}) {
  return (
    <div className="promoted-items">
      <h3>
      Our best pancakes
      </h3>
      <p>
      Made with indigirents with of best quality
      </p>
              <Gallery products={products} />
    </div>
  )
}

export default PromotedItems
