import React from "react";
import Rating from "../landing/review/Rating";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";

function ProductFrame({ product, classes }) {
  const { name, img, price, rating } = product;
  return (
    <Link to="/a" className={`-frame ${classes}`}>
      <div className="frame-img">
        <div className="frame-img-rating">
          <span className="frame-img-rating-text">
            <AiFillStar fill="#A16720" />
            <span> {rating}</span>
          </span>
        </div>
        <div className="frame-img-con">
          <img src={img} alt="" />
        </div>
      </div>
      <div className="frame-data">
        <span className="frame-data-name">{name}</span>
        <span className="frame-data-price">{price} zł</span>
      </div>
    </Link>
  );
}

export default ProductFrame;
