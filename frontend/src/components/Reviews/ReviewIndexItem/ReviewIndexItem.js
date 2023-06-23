import React from "react";
import "./ReviewIndexItem.css";
import {FaThumbsUp} from "react-icons/fa"

const ReviewIndexItem = ({review}) => {
    return (
        <div className="rii-container">
            <p className="rii-rating">Rating: {review.rating}</p>
            <p className="rii-title rii-text">{review.title}</p>
            <p className="rii-body rii-text">{review.body}</p>
            <p className="rii-author rii-text">Reviewed by: {review.author}</p>
            <button className="rii-helpful rii-text"><FaThumbsUp size={10}/> Helpful?</button>
            {/* You might want to add more details, such as the review author's name, etc. */}
        </div>
    )
}

export default ReviewIndexItem
