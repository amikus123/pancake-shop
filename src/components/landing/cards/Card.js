import React from "react";

function Card({ card,classes }) {
  const { img, header, text } = card;
  return (
    <div className={`card ${classes}`}>
      <div className="wrap">
        <img src={img} alt="panckake" />
        <div className="text-wrap">
        <h4>{header}</h4>
        <p>{text}</p>
        </div>
      </div>
    </div>
  );
}

// na mobile clikc to view
// desktop autoamtycznie sie poakzuja a synchornicznie 
export default Card;
