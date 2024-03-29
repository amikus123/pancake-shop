import React from "react";
import Desktop from "../../images/landing/reviews/review.png";
import ReviewsGallery from "./review/ReviewsGallery";
function Reviews() {
  return (
    <section className="reviews">
      <div className="reviews-wrap">
        <h2>What customers say about us</h2>
        <ReviewsGallery />
      </div>
      <img src={Desktop} alt="plate of pancakes" />
    </section>
  );
}

export default Reviews;
