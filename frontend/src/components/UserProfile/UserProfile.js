import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserReviews } from '../../store/review';
import './UserProfile.css';
import ReviewForm from '../Reviews/ReviewForm/ReviewForm';
import { deleteReview, updateReview } from '../../store/review';
import StarRating from '../Reviews/Ratings/StarRating';


const UserProfile = ({ match }) => {
    const dispatch = useDispatch();

    const user = useSelector(state => state.session.user)
    const userId = user.id

    useEffect(() => {
        dispatch(fetchUserReviews(userId));
    }, [dispatch, userId]);

    const reviews = useSelector(state => Object.values(state.reviews));

    const handleDelete = (reviewId) => {
        if (window.confirm("Are you sure you want to delete this review?")) {
            dispatch(deleteReview(reviewId)); // You need to implement this action
        }
    }

    return (
        <div className='up-wrapper'>
            <p className='up-header'>{user.firstName}'s Profile</p>
            <p className='up-reviews-header'>Your reviews:</p>
            {reviews.map(review => (
                <div key={`rev-${review.id}`} className='up-review-container'>
                    {review.product && (
                        <>
                            <div className='up-prod-container'>
                                <p className='up-prod-title'>{review.product.name}</p>
                                <img src={review.product.images[0]} alt={review.product.name} className='up-prod-img' />
                            </div>
                            <div className='up-review-text-container'>
                                <ul className='up-review-title'>{review.title}</ul>
                                <ul className='up-review-rating'>Rating:
                                    <StarRating rating={review.rating}/>
                                </ul>
                                <p className='up-review-body'>{review.body}</p>
                                <div className='button-container'>
                                    <div className="update-review-button">
                                        <ReviewForm review={review} onReviewSubmit={() => dispatch(updateReview(review.id))} />
                                    </div>
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
