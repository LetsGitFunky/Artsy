export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS";
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";

const receiveReviews = (reviews) => ({
    type: RECEIVE_REVIEWS,
    reviews
});

const receiveReview = (review) => ({
    type: RECEIVE_REVIEW,
    review
});

export const fetchReviews = () => async (dispatch) => {
    const response = await fetch(`/api/reviews`);

    if (response.ok) {
        const reviews = await response.json();
        dispatch(receiveReviews(reviews));
    }
};

export const fetchReview = (reviewId) => async (dispatch) => {
    const response = await fetch(`/api/reviews/${reviewId}`);

    if (response.ok) {
        const review = await response.json();
        dispatch(receiveReview(review));
    }
};

const initialState = {
    reviews: {},
};

const reviewsReducer = (state = initialState, action) => {
    switch (action.type) {
        case RECEIVE_REVIEWS:
        return { ...action.reviews }
        case RECEIVE_REVIEW:
        return { ...state, [action.review.id]: action.review }
        default:
        return state;
    }
};

export default reviewsReducer;
