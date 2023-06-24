import csrfFetch from './csrf';

export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS";
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const DELETE_REVIEW = "DELETE_REVIEW";

export const receiveReviews = (reviews) => ({
    type: RECEIVE_REVIEWS,
    reviews
});

export const receiveReview = (review) => ({
    type: RECEIVE_REVIEW,
    review
});

export const removeReview = (reviewId) => ({
    type: DELETE_REVIEW,
    reviewId
});

export const createReview = (productId, review) => (dispatch) => (
    csrfFetch(`/api/products/${productId}/reviews`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({review})
    })
    .then(response => response.json())
    .then(data => dispatch(receiveReview(data)))
    .catch(error => console.error('Error:', error))
);


export const updateReview = (product, review) => (dispatch) => (
    csrfFetch(`/api/products/${product.id}/reviews/${review.id}`, {
        method: "PATCH",
        body: JSON.stringify(review)
    })
    .then(response => response.json())
    .then(data => dispatch(receiveReview(data)))
    .catch(error => console.error('Error:', error))
);

export const deleteReview = (product, reviewId) => (dispatch) => (
    csrfFetch(`/api/products/${product.id}/reviews/${reviewId}`, {
        method: "DELETE"
    })
    .then(() => dispatch(removeReview(reviewId)))
    .catch(error => console.error('Error:', error))
);

// for UserProfile
export const fetchUserReviews = (userId) => (dispatch) => (
    csrfFetch(`/api/users/${userId}/reviews`)
    .then(response => response.json())
    .then(data => dispatch(receiveReviews(data)))
    .catch(error => console.error('Error:', error))
);

const initialState = {
    reviews: {},
};

const reviewsReducer = (state = initialState, action) => {
    switch (action.type) {
        case RECEIVE_REVIEWS:
            return { ...action.reviews }
        case RECEIVE_REVIEW:
            return { ...state, [action.review.id]: action.review }
        case DELETE_REVIEW:
            const newState = { ...state }
            delete newState[action.reviewId]
            return newState
        default:
            return state;
    }
};

export default reviewsReducer;
