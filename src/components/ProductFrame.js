import React from "react";
import Rating from "./review/Rating";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";

function ProductFrame({ product }) {
  const { name, img, price, rating } = product;
  return (
    <Link to="/a" className="product-frame" >
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
    </Link>
  );
}

export default ProductFrame;
