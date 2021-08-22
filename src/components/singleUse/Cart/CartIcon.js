import React, { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";

function CartIcon({ location, handleClick }) {
  const cart = useSelector((state) => [...state.cart]);
  const [cartItems, setCartItems] = useState(0);
  useEffect(() => {
    let items = 0;
    cart.forEach((item) => (items += item.amount));
    setCartItems(items);
  }, [cart]);
  return (
    <div
          className={`cart-icon ${location === "header"?"cart-header show-desktop":""}`}
          onClick={handleClick}
        >
          <FaShoppingCart className="show-number" number={cartItems} />
          {cartItems === 0 ? null : <span>{cartItems}</span>}
        </div>
  )
}

export default CartIcon;
