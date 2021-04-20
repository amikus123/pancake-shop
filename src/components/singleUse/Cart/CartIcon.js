import React, { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import CartAside from "./CartAside"
function CartIcon() {
  const cart = useSelector((state) => [...state.cart]);

  const [open, setOpen] = useState(false);
  const [cartItems,setCartItems] = useState(0)
  useEffect(()=>{
    let items =0;
    cart.forEach(item=>items+=item.amount)
    setCartItems(items)
  },[cart])
  const handleClick = () => {

    setOpen(!open);
    
    
  };
  return ( 
  
    <>
    <div className="cart" onClick={handleClick}>
     <>
       <FaShoppingCart className="show-number" number={cart.length}/>
      {cartItems ===0?null :<span> 
{cartItems}
</span>}
      </>
       
    </div>
    <CartAside open={open} setOpen={setOpen}/>
    </>

  );
}

export default CartIcon;
