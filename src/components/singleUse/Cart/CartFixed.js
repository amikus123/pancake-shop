import React, { useEffect,useState } from "react";
import CartAside from "./CartAside";
import CartIcon from "./CartIcon";

function CartFixed({handleClick,open,location}) {
 const [isCheckout, setIsCheckout] = useState(false)
 useEffect(()=>{
if(location.pathname === "/checkout" || location.pathname ==="/form"){
  setIsCheckout(true)
}else{
  setIsCheckout(false)
}
},[location.pathname,setIsCheckout])
  
  return ( 
  
    <>
    <div className={`cart ${isCheckout?"hide":null}`} onClick={handleClick}>
 
       <CartIcon/>
    </div>
    <CartAside open={open} setOpen={handleClick}/>
    </>

  );
}

export default CartFixed;
