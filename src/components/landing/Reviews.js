import React from 'react'
import Mobile from "../../images/landing/Review-mobile.png";
import Desktop from "../../images/landing/Review-desktop.png";
import ReviewsGallery from '../review/ReviewsGallery';

// im not sure if 2 pic are making any difference
function Reviews() {
  return (
    <section className="reviews">
      <div className="reviews-wrap">
      <h2>
      What customers say about us
      </h2>
      <ReviewsGallery/>
      </div>
      <div className="reviews-img">
        {/* <img src={Mobile}/> */}
      </div>
    </section>
  )
}

export default Reviews
