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
        <div className='user-profile-wrapper'>
            <p className='user-profile-header'>User Profile</p>
            <p className='user-reviews-header'>User Reviews</p>
            {reviews.map(review => (
                <div key={`rev-${review.id}`} className='user-profile-review-text-container'>
                    <p className='user-profile-review-title'>{review.title}</p>
                    <StarRating rating={review.rating}/>
                    <p className='user-profile-review-body'>{review.body}</p>
                    <ReviewForm review={review} onReviewSubmit={() => dispatch(updateReview(review.id))} />
                    <button onClick={() => handleDelete(review.id)}>Delete</button>
                </div>
            ))}
        </div>
    );
}

export default UserProfile;
