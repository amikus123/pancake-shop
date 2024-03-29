import React from "react";
import { AiFillStar } from "react-icons/ai";

function Rating({ number }) {
  return (
    <div className="rating">
      <div className="stars" style={{ width: `${Math.round(number) * 18}px` }}>
        <div className="full-stars">
          <AiFillStar fill="#A16720" />
          <AiFillStar fill="#A16720" />
          <AiFillStar fill="#A16720" />
          <AiFillStar fill="#A16720" />
          <AiFillStar fill="#A16720" />
        </div>
      </div>
    </div>
  );
}

export default Rating;
