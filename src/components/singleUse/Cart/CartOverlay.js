import React from 'react'
import CartContent from './CartContent'

function CartOverlay({opened}) {
  const preventClosing=(e)=>{
    console.log("fisrt")
    e.stopPropagation();

  }
  return (
    <div className={`cart-overlay cart-overlay-${opened?"opened":"closed"}` }onClick={preventClosing}>
<CartContent/>
    </div>
  )
}

export default CartOverlay
