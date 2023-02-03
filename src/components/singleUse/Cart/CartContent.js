import React from "react";
import Checkout from "../../../pages/Checkout";
import Menu from "../../../pages/Menu";

import Button from "../../general/Button";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

function CartContent({ closeCart }) {
  const cart = useSelector((state) => [...state.cart]);

  return (
    <div
      className={`cart-overlay-list ${
        cart.length === 0 ? "empty-cart" : "full-cart"
      }`}
    >
      {cart.length === 0 ? (
        <>
          <p className="empty">The cart is empty!</p>
          <p>You can change that</p>
          <Button
            text={"HERE"}
            location={"/menu"}
            component={Menu}
            type={"red"}
            onClick={closeCart}
          />
        </>
      ) : (
        <>
          <ul>
            {cart.map((item, index) => {
              return <CartItem item={item} key={index} />;
            })}
          </ul>
          <Button
            text={"CHECKOUT"}
            location={"/checkout"}
            component={Checkout}
            type={"red"}
            onClick={closeCart}
          />
        </>
      )}
    </div>
  );
}

export default CartContent;
