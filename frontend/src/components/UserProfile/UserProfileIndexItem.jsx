import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteReview } from "../../store/review";
import StarRating from "../Reviews/Ratings/StarRating";
import ReviewForm from "../Reviews/ReviewForm/ReviewForm";

const UserProfileIndexItem = ({review}) => {
    const dispatch = useDispatch()

    const product = useSelector(state => (state.products[review.productId]))

    const handleDelete = (review) => {
        // if (window.confirm("Are you sure you want to delete this review?")) {
            dispatch(deleteReview(product, review.id));
        // }
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
                        <ReviewForm productId={product.id} review={review} formType={"update"}/>
                    </div>
                    <button onClick={() => handleDelete(review)} className="delete-review-button">Delete</button>
                </div>
            </div>
        </div>
    ) : null
}

export default UserProfileIndexItem
