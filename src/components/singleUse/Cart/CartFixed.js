import React from "react";
import CartAside from "./CartAside";
import CartIcon from "./CartIcon";
function CartFixed({handleClick,open}) {
 // ad on drag ledt

  
  return ( 
  
    <>
    <div className="cart" onClick={handleClick}>
 
       <CartIcon/>
    </div>
    <CartAside open={open} setOpen={handleClick}/>
    </>

  );
}

export default CartFixed;
