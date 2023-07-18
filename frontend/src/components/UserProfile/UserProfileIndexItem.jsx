import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteReview } from "../../store/review";
import StarRating from "../Reviews/Ratings/StarRating";
import ReviewForm from "../Reviews/ReviewForm/ReviewForm";
import ConfirmationModal from "../../context/ConfirmationModal";

const UserProfileIndexItem = ({review}) => {
    const [showConfirm, setShowConfirm] = useState(false);
    const dispatch = useDispatch()

    const product = useSelector(state => (state.products[review.productId]))

    const handleDelete = (review) => {
        setShowConfirm(true);
    }

    const handleConfirmDelete = () => {
        setShowConfirm(false);
        dispatch(deleteReview(product, review.id));
    }

    return product ? (
        <div className="up-review-container">
            <div className='up-prod-container'>
                <p className='up-prod-title'>{product.name}</p>
                <img src={product.image} alt={product.name} className='up-prod-img' />
            </div>
            <div className='up-review-text-container'>
                <ul className='up-review-title'>{review.title}</ul>
                <ul className='up-review-rating'>Rating:
                    <StarRating rating={review.rating}/>
                </ul>
                <p className='up-review-body'>{review.body}</p>
                <div className='button-container'>
                    <div className="update-review-button">
                        <ReviewForm
                            productId={product.id}
                            review={review}
                            formType={"update"}
                        />
                    </div>
                    <button onClick={() => handleDelete(review)} className="delete-review-button">Delete</button>
                    {showConfirm &&
                        <ConfirmationModal
                            onConfirm={handleConfirmDelete}
                            onCancel={() => setShowConfirm(false)}
                        />}
                </div>
            </div>
        </div>
    ) : null
}

export default UserProfileIndexItem
