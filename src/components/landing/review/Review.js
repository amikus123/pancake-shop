import React,{useState} from 'react'
import Rating from './Rating';

function Review({data}) {
  const {img,name,position,text,rating} = data;
  return (
    <div className="review-item">
      <div className="author">
      <img src={img} alt="person who posted this review"/>
      <div className="author-data">
        <span className="name">{name}</span>
        <span className="posistion">{position}</span>
      </div>
    </div>

      <p>
        {text}
      </p>
      <Rating number={rating}/>
      </div>
  )
}

export default Review
