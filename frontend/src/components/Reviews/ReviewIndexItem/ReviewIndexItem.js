import React from "react";
import "./ReviewIndexItem.css";

const ReviewIndexItem = ({review}) => {
    return (
        <div className="rii-container">
            <p className="rii-rating">Rating: {review.rating}</p>
            <p className="rii-title rii-text">{review.title}</p>
            <p className="rii-body rii-text">{review.body}</p>
            <button className="rii-helpful rii-text">Helpful?</button>
            {/* You might want to add more details, such as the review author's name, etc. */}
        </div>
    )
}

export default ReviewIndexItem
