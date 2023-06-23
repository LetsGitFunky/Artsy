import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ReviewIndexItem from "../ReviewIndexItem/ReviewIndexItem.js";
import './ReviewIndex.css';
import AverageStarRating from "../Ratings/AverageStarRating";

const ReviewIndex = ({productId}) => {
    const reviews = useSelector((state) => Object.values(state.reviews));

    return (
        <div className="review-index-container">
            <div className="avg-rating">
                <AverageStarRating reviews={reviews} />
            </div>
                {reviews.map((review) => (
                    <ReviewIndexItem key={`item-${review.id}`} review={review} />
                ))}
        </div>
    );
};

export default ReviewIndex;
