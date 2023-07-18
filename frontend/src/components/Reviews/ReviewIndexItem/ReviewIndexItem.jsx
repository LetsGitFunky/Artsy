import React, { useState } from "react";
import "./ReviewIndexItem.css";
import StarRating from "../Ratings/StarRating";
import ReviewForm from "../ReviewForm/ReviewForm";
import { deleteReview } from "../../../store/review";
import { useDispatch } from "react-redux";
import ConfirmationModal from "../../../context/ConfirmationModal";

const ReviewIndexItem = ({review, currentUser}) => {
    const [showConfirm, setShowConfirm] = useState(false);
    const dispatch = useDispatch()

    const handleDelete = (review) => {
        setShowConfirm(true);
    }

    const handleConfirmDelete = () => {
        setShowConfirm(false);
        dispatch(deleteReview(review.productId, review.id));
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
                <div className="update-delete-container">
                    <ReviewForm
                        productId={review.productId}
                        review={review}
                        formType={"update"}
                    />
                    <button onClick={() => handleDelete(review)} className="delete-review-button">Delete Review</button>
                    {showConfirm &&
                        <ConfirmationModal
                            onConfirm={handleConfirmDelete}
                            onCancel={() => setShowConfirm(false)}
                        />}
                </div>
            }
        </div>
    )
}

export default ReviewIndexItem
