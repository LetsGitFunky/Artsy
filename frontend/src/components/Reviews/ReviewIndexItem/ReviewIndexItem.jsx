import React from "react";
import "./ReviewIndexItem.css";
import StarRating from "../Ratings/StarRating";
import ReviewForm from "../ReviewForm/ReviewForm";
import { deleteReview } from "../../../store/review";
import { useDispatch } from "react-redux";

const ReviewIndexItem = ({review, currentUser}) => {
    const dispatch = useDispatch()

    const handleDelete = (review) => {
        if (window.confirm("Are you sure you want to delete this review?")) {
            dispatch(deleteReview(review.productId, review.id));
        }
    }

    return (
        <div className="rii-container">
            <div className="rii-rating">
                <StarRating rating={review.rating}/>
            </div>
            <p className="rii-title rii-text">{review.title}</p>
            <p className="rii-body rii-text">{review.body}</p>
            <p className="rii-author rii-text">Reviewed by: {review.author}</p>
            {currentUser && currentUser.id === review.userId &&
                <>
                    <ReviewForm
                        productId={review.productId}
                        review={review}
                        formType={"update"}
                    />
                    <button onClick={() => handleDelete(review)} className="delete-review-button">Delete</button>
                </>
            }
        </div>
    )
}

export default ReviewIndexItem
