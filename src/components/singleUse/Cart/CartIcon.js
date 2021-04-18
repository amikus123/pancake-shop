import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { GrClose } from "react-icons/gr";

import CartOverlay from "./CartOverlay";
function CartIcon() {
  const [open, setOpen] = useState(false);
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
      {open ? < GrClose stroke="#a16720" /> : <FaShoppingCart />}
      <CartOverlay opened={open} />
    </div>
  );
}

export default CartIcon;
