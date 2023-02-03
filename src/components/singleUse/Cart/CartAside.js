import React, { useEffect, useState } from "react";
import Button from "../../general/Button";
import CartItem from "./CartItem";
import { IoClose } from "react-icons/io5";
import { useSelector } from "react-redux";
function CartAside({ open, setOpen }) {
  const cart = useSelector((state) => [...state.cart]);
  const [cartItems, setCartItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    // I get before price before the calculatiobn
    let items = 0,
      price = 0;
    cart.forEach((item) => {
      items += item.amount;
      price += item.amount * item.product.price;
    });
    setCartItems(items);
    setTotalPrice(price);
  }, [cart, totalPrice]);

  return (
    <aside className={`cart-aside cart-aside-${open ? "open" : "closed"}`}>
      <div className="cart-aside-header" onClick={() => setOpen(false)}>
        <div className="text-wrap">
          <span>
            YOUR CART{cartItems !== 0 ? " (" + cartItems + ")" : null}
          </span>
        </div>
        <IoClose />
      </div>
      {cart.length === 0 ? (
        <div className="cart-aside-empty">
          <span>Your cart is empty</span>
          <Button
            text={"BACK TO SHOP"}
            type={"trans"}
            onClick={() => {
              setOpen(false);
            }}
          />
        </div>
      ) : (
        <>
          <div className="cart-aside-full">
            <ul>
              {cart.map((item, index) => {
                return <CartItem item={item} key={index} />;
              })}
            </ul>
          </div>
          <div className="cart-aside-footer">
            <div className="total-price">
              <span className="price-info">In total</span>
              <span className="price-amount">{totalPrice} zł</span>
            </div>
            <Button
              text={"CHECKOUT"}
              location="/checkout"
              type={"red"}
              onClick={() => {
                setOpen(false);
              }}
            />
            <Button
              text={"BACK TO SHOP"}
              type={"trans"}
              onClick={() => {
                setOpen(false);
              }}
            />
          </div>
        </>
      )}
    </aside>
  );
}

export default CartAside;
