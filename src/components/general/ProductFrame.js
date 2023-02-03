import React, { useState, useEffect } from "react";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../.../../../actions";

function ProductFrame({ product, classes }) {
  const { name, img, price, rating } = product;
  const dispatch = useDispatch();
  const [clicked, setClicked] = useState(false);
  const [timeoutID, setTimeoutId] = useState(0);

  const revert = () => {
    setClicked(false);
  };
  const handleClick = (e) => {
    e.preventDefault();
    dispatch(addItemToCart(product));
    setClicked(true);
    if (timeoutID !== 0) {
      clearTimeout(timeoutID);
    }
    const x = setTimeout(revert, 1500);
    setTimeoutId(x);
  };
  useEffect(() => {}, []);
  return (
    <Link
      to={"#" + name}
      id={name}
      className={`frame ${classes}`}
      onClick={handleClick}
    >
      <div className="frame-img">
        <div className="frame-img-rating">
          <span className="frame-img-rating-text">
            <AiFillStar fill="#A16720" />
            <span> {rating}</span>
          </span>
        </div>
        <div className="frame-img-con">
          <div className={`added ${clicked ? "added-active" : ""}`}>
            <span> Item added</span>
          </div>
          <img src={img} alt="" />
        </div>
      </div>
      <div className="frame-data">
        <span className="frame-data-name">{name}</span>
        <div className="frame-data-wrap">
          <span className="frame-data-wrap-price">{price} zł</span>
          <FaCartPlus />
        </div>
      </div>
    </Link>
  );
}

export default ProductFrame;
