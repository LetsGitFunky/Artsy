import React from "react";
import "./ReviewIndexItem.css";
import StarRating from "../Ratings/StarRating";
import ReviewForm from "../ReviewForm/ReviewForm";
// import { useState } from "react";

const ReviewIndexItem = ({review, currentUser}) => {

    // console.log(review)

    return (
        <div className="rii-container">
            <div className="rii-rating">
                <StarRating rating={review.rating}/>
            </div>
            <p className="rii-title rii-text">{review.title}</p>
            <p className="rii-body rii-text">{review.body}</p>
            {/* <p>{review.id}</p> */}
            <p className="rii-author rii-text">Reviewed by: {review.author}</p>
            {currentUser && currentUser.id === review.userId &&
                <ReviewForm
                    productId={review.productId}
                    review={review}
                    formType={"update"}
                />}
        </div>
    )
}

export default ReviewIndexItem
