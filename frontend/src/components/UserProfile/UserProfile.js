import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserReviews } from '../../store/review';

const UserProfile = ({ match }) => {
    const dispatch = useDispatch();

    // Get the current logged-in user's id
    const userId = useSelector(state => state.session.user.id);

    useEffect(() => {
        dispatch(fetchUserReviews(userId));
    }, [dispatch, userId]);

    // Select the reviews from your Redux state
    const reviews = useSelector(state => Object.values(state.reviews));

    return (
        <div>
            <h2>User Profile</h2>
            <h3>User Reviews</h3>
            {reviews.map(review => (
                <div key={review.id}>
                    <h4>{review.title}</h4>
                    <p>{review.body}</p>
                </div>
            ))}
        </div>
    );
}

export default UserProfile;
