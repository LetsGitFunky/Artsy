import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchReviews } from "../../../store/review.js";
import ReviewIndexItem from "../ReviewIndexItem/ReviewIndexItem.js";
import './ReviewIndex.css';

const ReviewIndex = ({productId}) => {
    const reviews = useSelector((state) => Object.values(state.reviews));
    console.log(reviews);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchReviews(productId));
    }, [dispatch, productId]);

    return (
        <div className="review-index-container">
            {reviews.map((review) => (
                <ReviewIndexItem key={`item-${review.id}`} review={review} />
            ))}
        </div>
    );
};

export default ReviewIndex;
