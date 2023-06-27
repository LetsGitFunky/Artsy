import React from "react";
import { useSelector } from "react-redux";
import ReviewIndexItem from "../ReviewIndexItem/ReviewIndexItem";
import './ReviewIndex.css';
import AverageStarRating from "../Ratings/AverageStarRating";

const ReviewIndex = () => {
    const reviews = useSelector((state) => Object.values(state.reviews));

    return reviews ? (
        <div className="review-index-container">
            <div className="avg-rating">
                <AverageStarRating reviews={reviews} />
            </div>
                {reviews.map((review, i) => (
                    <ReviewIndexItem key={`review-item-${i}`} review={review} />
                ))}
        </div>
    ) : null;
};

export default ReviewIndex;
