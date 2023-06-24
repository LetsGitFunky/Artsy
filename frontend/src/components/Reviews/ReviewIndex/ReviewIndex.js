import React from "react";
import { useSelector } from "react-redux";
import ReviewIndexItem from "../ReviewIndexItem/ReviewIndexItem.js";
import './ReviewIndex.css';
import AverageStarRating from "../Ratings/AverageStarRating";

const ReviewIndex = () => {
    const reviews = useSelector((state) => Object.values(state.reviews));

    return (
        <div className="review-index-container">
            <div className="avg-rating">
                <AverageStarRating reviews={reviews} />
            </div>
                {reviews.map((review) => (
                    <ReviewIndexItem key={`rev-item-${review.id}`} review={review} />
                ))}
        </div>
    );
};

export default ReviewIndex;
