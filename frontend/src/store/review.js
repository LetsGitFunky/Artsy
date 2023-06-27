import csrfFetch from './csrf';
// import { receiveProducts } from "./product.js"

export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS";
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const DELETE_REVIEW = "DELETE_REVIEW";

export const receiveReviews = (reviews) => ({
    type: RECEIVE_REVIEWS,
    reviews
});

export const receiveReview = (data) => ({
        type: RECEIVE_REVIEW,
        data
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

export const updateReview = (productId, review) => (dispatch) => (
    csrfFetch(`/api/products/${productId}/reviews/${review.id}`, {
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

const initialState = {
    reviews: {},
};

const reviewsReducer = (state = initialState, action) => {
    switch (action.type) {
        case RECEIVE_REVIEWS:
            // debugger
            return { ...action.reviews }
        case RECEIVE_REVIEW:
            return { ...state, [action.data.review.id]: action.data.review }
        case DELETE_REVIEW:
            const newState = { ...state }
            delete newState[action.reviewId]
            return newState
        default:
            return state;
    }
};

export default reviewsReducer;
