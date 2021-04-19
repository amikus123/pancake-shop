import React, { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import { useSelector } from "react-redux";

import CartOverlay from "./CartOverlay";
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
    const asd = (e) =>{
      console.log("click",e)
      setOpen(false);
      window.removeEventListener("click",asd)

    }
    console.log(2);
    setOpen(!open);
    setTimeout(()=>{
      if(open){
        window.removeEventListener("click",asd)
      }
      else{
        window.addEventListener("click",asd)
      }
    },1)
    
  };
  return (
    <div className="cart" onClick={handleClick}>
      {open ? < GrClose stroke="#a16720" /> :<>
       <FaShoppingCart className="show-number" number={cart.length}/>
      {/* {cartItems ===0?null :<span> 
{cartItems}
</span>} */}
      </>
       }
      <CartOverlay opened={open} closeCart={()=>{setOpen(false)}}/>
    </div>
  );
}

export default CartIcon;
