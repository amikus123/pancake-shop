import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { IoTrashBinSharp } from "react-icons/io5";

import { useDispatch } from "react-redux";
import {
  addItemToCart,
  removeItemFromCart,
  removeAllOfItemFromCart,
} from "../../../actions";
function CartItem({ item }) {
  const { name, img, price } = item.product;
  const dispatch = useDispatch();

  return (
    <li className="cart-item">
      <div className="img-wrap">
        <img src={img} alt="item" />
        {/* // add aniamtion on number change */}
      </div>
      <div className="text-wrap">
        <p>{name}</p>

        <div className="interaction-wrap">
          <div className="amount">
            <FaPlus
              className="plus"
              onClick={() => dispatch(addItemToCart(item.product))}
            />
            <span>{item.amount}</span>
            <FaMinus
              className="minus"
              onClick={() => dispatch(removeItemFromCart(item.product))}
            />
          </div>
          <span className="price">{price}zł</span>
          <IoTrashBinSharp
            onClick={() => {
              dispatch(removeAllOfItemFromCart(item.product));
            }}
          />
        </div>
      </div>
    </li>
  );
}

export default CartItem;
