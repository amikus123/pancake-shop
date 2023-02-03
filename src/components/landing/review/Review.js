import Rating from "./Rating";

function Review({ data, classess }) {
  const { img, name, position, text, rating } = data;
  return (
    <div className={`review-item ${classess}`}>
      <div className="author">
        <img src={img} alt="person who posted this review" />
        <div className="author-data">
          <span className="name">{name}</span>
          <span className="posistion">{position}</span>
        </div>
      </div>

      <p className="review-text">{text}</p>
      <Rating number={rating} />
    </div>
  );
}

export default Review;
