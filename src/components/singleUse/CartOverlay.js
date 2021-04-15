import React from 'react'

function CartOverlay({opened}) {
  const preventClosing=(e)=>{
    console.log("fisrt")
    e.stopPropagation();

  }
  return (
    <div className={`cart-overlay cart-overlay-${opened?"opened":"closed"}` }onClick={preventClosing}>
      <div className="cart-overlay-list">
      
      </div>
    </div>
  )
}

export default CartOverlay
