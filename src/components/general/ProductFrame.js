import React from "react";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../.../../../actions";

function ProductFrame({ product, classes }) {
  const { name, img, price, rating } = product;
  const dispatch = useDispatch();

  const handleClick = (e) =>{
    e.preventDefault();
    console.log("S")
    dispatch(addItemToCart(product));

  }
  return (
    <Link to="/a" className={`frame ${classes}`}>
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
        <div className="frame-data-wrap" onClick={handleClick}>
          <span className="frame-data-wrap-price">{price} zł</span>
          <FaCartPlus  />
        </div>
      </div>
    </Link>
  );
}

export default ProductFrame;
