import React from 'react'
import CartContent from './CartContent'

function CartOverlay({opened,closeCart}) {
  const preventClosing=(e)=>{
    console.log("fisrt")
    e.stopPropagation();

  }
  return (
    <div className={`cart-overlay cart-overlay-${opened?"opened":"closed"}`}  unselectable="on" onClick={preventClosing}>
<CartContent closeCart={closeCart}/>

    </div>
  )
}

export default CartOverlay
