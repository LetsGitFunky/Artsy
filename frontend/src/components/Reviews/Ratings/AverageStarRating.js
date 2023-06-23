import React from "react";
import StarRating from "./StarRating";
import "./AverageStarRating.css"
const calculateAverageRating = (reviews) => {
    if (reviews.length === 0) return 0;
    const sum = reviews.reduce((acc, review) => acc + review.rating, 0);
    return (sum / reviews.length).toFixed(1);
};

const AverageStarRating = ({reviews}) => {
    const averageRating = calculateAverageRating(reviews);
    return (
        <div className="avg-rating-container">
        <p className="avg-text">Average rating for this product</p>
        <StarRating rating={Math.round(averageRating)} />
        <p className="avg-rating-text">({averageRating})</p>
        </div>
    );
};

export default AverageStarRating;
