export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS";
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const CREATE_REVIEW = "CREATE_REVIEW";
export const UPDATE_REVIEW = "UPDATE_REVIEW";
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

// export const createReview = (review) => async (dispatch) => {
//     const review = await fetch(`/products/${product.id}/reviews/${review.id}`,
//     method: "POST",

//     )
// }

const initialState = {
    reviews: {},
};

const reviewsReducer = (state = initialState, action) => {
    switch (action.type) {
        case RECEIVE_REVIEWS:
            console.log(state, action)
        return { ...action.reviews }
        default:
        return state;
    }
};

export default reviewsReducer;
