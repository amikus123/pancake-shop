import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { GrClose } from "react-icons/gr";

import CartOverlay from "./CartOverlay";
function CartIcon() {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    console.log(2);
    setOpen(!open);
  };
  return (
    <div className="cart" onClick={handleClick}>
      {open ? < GrClose stroke="#a16720" /> : <FaShoppingCart />}
      <CartOverlay opened={open} />
    </div>
  );
}

export default CartIcon;
