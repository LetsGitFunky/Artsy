import React from "react";

const ReviewIndexItem = ({review}) => {
    return (
        <div className="review-item-container">
            <h3>{review.title}</h3>
            <p>Rating: {review.rating}</p>
            <p>{review.body}</p>
            {/* You might want to add more details, such as the review author's name, etc. */}
        </div>
    )
}

export default ReviewIndexItem
