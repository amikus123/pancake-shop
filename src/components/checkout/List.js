import React, { useEffect, useState } from "react";
import Button from "../general/Button";
import { useSelector } from "react-redux";
import CartItem from "../singleUse/Cart/CartItem";
 
function List() {
  const cart = useSelector((state) => [...state.cart]);
  const [cartItems, setCartItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    // i get before price before the calculatiobn
    let items = 0,
      price = 0;
    cart.forEach((item) => {
      items += item.amount;
      price += item.amount * item.product.price;
    });
    setCartItems(items);
    setTotalPrice(price);
    console.log(totalPrice)
  }, [cart,totalPrice]);

  return (
  <div className="checkout-list">
      {cart.length === 0 ? (
        <div className="checkout-list-empty">
          <span>Your cart is empty</span>
          <Button
            text={"BACK TO SHOP"}
            // type={"trans"}
            location={"/menu"}
          />
        </div>
      ) : (
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
              <span className="price-amount">
                 
                 {totalPrice} zł</span>
            </div>
            {/* <Button
              text={"CHECKOUT"}
              location="/checkout"
              type={"red"}
              onClick={() => {
                setOpen(false);
              }}
            /> */}
            {/* <Button
              text={"BACK TO SHOP"}
              type={"trans"}
              onClick={() => {
                setOpen(false);
              }}
            /> */}
          </div>
        </>
      )}
    </div>

  )
}

export default List
