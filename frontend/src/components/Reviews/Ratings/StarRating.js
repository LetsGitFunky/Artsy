import React from "react";
import { FaStar } from "react-icons/fa";
import "./StarRating.css";

const StarRating = ({ rating }) => {
    return (
        <div className="star-rating">
        {[...Array(5)].map((star, i) => {
            const ratingValue = i + 1;
            return (
            <label key={i}>
                <FaStar
                className="star"
                color={ratingValue <= rating ? "#000" : "#e4e5e9"}
                size={15}
                />
            </label>
            );
        })}
        </div>
    );
};

export default StarRating;
