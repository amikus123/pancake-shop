import React, { useEffect, useState } from "react";
import Button from "../general/Button";
import { useSelector } from "react-redux";
import CartItem from "../singleUse/Cart/CartItem";

function List() {
  const cart = useSelector((state) => [...state.cart]);
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    let price = 0;
    cart.forEach((item) => {
      price += item.amount * item.product.price;
    });
    setTotalPrice(price);
  }, [cart, totalPrice]);

  return (
    <>
      {cart.length === 0 ? (
        <div className="checkout-list-empty">
          <span>Your cart is empty</span>
          <Button text={"BACK TO SHOP"} location={"/menu"} />
        </div>
      ) : (
        <div className="checkout-list">
          <>
            <div className="checkout-list-full">
              <ul>
                {cart.map((item, index) => {
                  return <CartItem item={item} key={index} />;
                })}
              </ul>
            </div>
            <div className="checkout-list-footer">
              <div className="total-price">
                <span className="price-info">In total</span>
                <span className="price-amount">{totalPrice} zł</span>
              </div>
              <Button text={"CONTINUE"} location="/form" type={"red"} />
            </div>
          </>
        </div>
      )}
    </>
  );
}

export default List;
