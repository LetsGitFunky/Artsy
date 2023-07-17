import React from "react";
import "./ReviewIndexItem.css";
import StarRating from "../Ratings/StarRating";


const ReviewIndexItem = ({review}) => {
    return (
        <div className="rii-container">
            <div className="rii-rating">
                <StarRating rating={review.rating}/>
            </div>
            <p className="rii-title rii-text">{review.title}</p>
            <p className="rii-body rii-text">{review.body}</p>
            <p className="rii-author rii-text">Reviewed by: {review.author}</p>
        </div>
    )
}

export default ReviewIndexItem
