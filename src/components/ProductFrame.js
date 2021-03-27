import React from "react";
import Rating from "./Rating";
import { AiFillStar } from "react-icons/ai";

function ProductFrame({ product }) {
  const { name, img, price, rating } = product;
  return (
    <div className="product-frame">
      <div className="frame-img">
        <div className="frame-rating">
          <span className="frame-rating-text">
            <AiFillStar fill="#A16720" />
            <span> {rating}</span>
          </span>
        </div>
        <img src={img} alt="" />
      </div>
      <div className="frame-data">
        <span className="frame-name">{name}</span>
        <span className="frame-price">{price} zł</span>
      </div>
    </div>
  );
}

export default ProductFrame;
