import { receiveReviews } from "./review";

export const RECEIVE_PRODUCTS = "RECEIVE_PRODUCTS";
export const RECEIVE_PRODUCT = "RECEIVE_PRODUCT";


export const receiveProducts = (products) => ({
    type: RECEIVE_PRODUCTS,
    products
});

export const receiveProduct = (product) => ({
    type: RECEIVE_PRODUCT,
    product
});

//thunk action creators

export const fetchProducts = () => async (dispatch) => {
    const response = await fetch(`/api/products`)

    if (response.ok) {
        const products = await response.json()
        dispatch(receiveProducts(products))
    }
};

export const fetchProduct = (product) => async (dispatch) => {
    const response = await fetch(`/api/products/${product}`)

    if (response.ok) {
        const data = await response.json()
        // debugger
        dispatch(receiveProduct(data.product))
        dispatch(receiveReviews(data.reviews))
    }
};



const productReducer = (state = {}, action) => {

    switch (action.type) {
        case RECEIVE_PRODUCTS:
            // debugger
        return {...action.products}
        case RECEIVE_PRODUCT:
            // debugger
        return {...state, [action.product.id]: action.product}

    default:
        return state;
    }
};

export default productReducer
