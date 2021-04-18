import React, { useEffect,useState } from 'react'
import Menu from "../../../pages/Menu";
import Button from "../../general/Button";
import CartItem from "./CartItem";
import { useSelector, useDispatch } from "react-redux";



function CartContent() {
  const cart = useSelector((state) => [...state.cart]);

  return (
    <div className="cart-overlay-list" onClick={()=>{console.log(cart)}}>
        <ul>
          {cart.map((item,index)=>{
            return <CartItem item={item} key={index}/>
          })}
        </ul>
        <Button text={"CHECKOUT"} location={"/menu"} component={Menu} type={"red"} />
    </div>
  )
}

export default CartContent
