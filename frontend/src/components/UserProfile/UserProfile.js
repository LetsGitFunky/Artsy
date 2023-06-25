import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserReviews } from '../../store/review';
import './UserProfile.css';
import ReviewForm from '../Reviews/ReviewForm/ReviewForm';
import { deleteReview, updateReview } from '../../store/review';
import StarRating from '../Reviews/Ratings/StarRating';


const UserProfile = ({ match }) => {
    const dispatch = useDispatch();

    // Get the current logged-in user's id
    const userId = useSelector(state => state.session.user.id);

    useEffect(() => {
        dispatch(fetchUserReviews(userId));
    }, [dispatch, userId]);

    // Select the reviews from your Redux state
    const reviews = useSelector(state => Object.values(state.reviews));

    const handleDelete = (reviewId) => {
        if (window.confirm("Are you sure you want to delete this review?")) {
            dispatch(deleteReview(reviewId)); // You need to implement this action
        }
    }

    return (
        <div className='up-wrapper'>
            <p className='up-header'>User Profile</p>
            <p className='up-reviews-header'>User Reviews</p>
            {reviews.map(review => (
                <div key={`rev-${review.id}`} className='up-review-container'>
                    {review.product && (
                        <>
                            <div className='up-prod-container'>
                                <img src={review.product.images[0]} alt={review.product.name} className='up-prod-img' />
                                <p className='up-prod-title'>{review.product.name}</p>
                            </div>
                            <div className='up-review-text-container'>
                                <p className='up-review-title'>{review.title}</p>
                                <p className='up-review-rating'>Rating:
                                    <StarRating rating={review.rating}/>
                                </p>
                                <p className='up-review-body'>{review.body}</p>
                                <div className='button-container'>
                                    <ReviewForm className="update-review-button" review={review} onReviewSubmit={() => dispatch(updateReview(review.id))} />
                                    <button onClick={() => handleDelete(review.id)} className="delete-review-button">Delete</button>

                                </div>
                            </div>
                        </>
                    )}
                </div>
            ))}
        </div>
    );
}

export default UserProfile;
