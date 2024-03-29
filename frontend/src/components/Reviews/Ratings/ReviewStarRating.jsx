import React, { useState } from 'react';
import  {AiFillStar, AiOutlineStar } from "react-icons/ai"

const Star = ({ filled, onClick }) => {
    return (
        <span onClick={onClick}>
        {filled ? <AiFillStar size={30}/> : <AiOutlineStar size={30}/>}
        </span>
    );
}

const ReviewStarRating = ({ currentRating, onRatingChange }) => {
    const [rating, setRating] = useState(currentRating || 0);

    const handleStarClick = (index) => {
        const newRating = index + 1;
        setRating(newRating);
        onRatingChange(newRating);
    };

    return (
        <div>
        {Array(5).fill(0).map((_, index) => (
            <Star
            key={index}
            filled={index < rating}
            onClick={() => handleStarClick(index)}
            />
        ))}
        </div>
    );
}

export default ReviewStarRating
