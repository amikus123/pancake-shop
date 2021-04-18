import React from 'react'
import { FaPlus,FaMinus } from "react-icons/fa";
import {useDispatch } from "react-redux";
import { addItemToCart,removeItemFromCart } from "../../../actions";
function CartItem({item}) {
  const {name} = item.product;
  const dispatch = useDispatch();

  return (
    <li> 
      {/* <img src={img}/> */}

    <p>
    {name}
    </p>
    <div>
    <FaPlus className="plus"  onClick={()=>dispatch(addItemToCart(item.product))}/>
    <span>

    {item.amount}

    </span>
    <FaMinus className="minus"  onClick={()=>dispatch(removeItemFromCart(item.product))}/>
    </div>

    </li>
  )
}

export default CartItem
