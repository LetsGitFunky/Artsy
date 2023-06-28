import csrfFetch from './csrf';

export const RECEIVE_CART_ITEMS = "RECEIVE_CART_ITEMS";
export const RECEIVE_CART_ITEM = "RECEIVE_CART_ITEM";
export const DELETE_CART_ITEM = "DELETE_CART_ITEM";

export const receiveCartItems = (cartItems) => ({
    type: RECEIVE_CART_ITEMS,
    cartItems
});

export const receiveCartItem = (data) => ({
    type: RECEIVE_CART_ITEM,
    data
});

export const removeCartItem = (cartItemId) => ({
    type: DELETE_CART_ITEM,
    cartItemId
});

export const fetchCartItems = () => (dispatch) => {
    csrfFetch(`/api/cart_items`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => response.json())
    .then(cartItems => dispatch(receiveCartItems(cartItems)))
    .catch(error => console.error('Error:', error))
}

export const createCartItem = (cartItem) => (dispatch) => {
    csrfFetch(`/api/cart_items`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({cartItem})
    })
    .then(response => response.json())
    .then(data => dispatch(receiveCartItem(data)))
    .catch(error => console.error('Error:', error))
}

export const updateCartItem = (cartItem) => (dispatch) => {
    csrfFetch(`/api/cart_items/${cartItem.id}`, {
        method: "PATCH",
        body: JSON.stringify({cartItem})
    })
    .then(response => response.json())
    .then(cartItem => dispatch(receiveCartItem(cartItem)))
    .catch(error => console.error('Error:', error))
}

export const deleteCartItem = (cartItemId) => (dispatch) => {
    csrfFetch(`/api/cart_items/${cartItemId}`, {
        method: "DELETE",
    })
    .then(() => dispatch(removeCartItem(cartItemId)))
    .catch(error => console.error('Error:', error))
}

const initialState = {};

const cartItemsReducer = (state = initialState, action) => {
    switch (action.type) {
        case RECEIVE_CART_ITEMS:
            // debugger
            return { ...action.cartItems }
        case RECEIVE_CART_ITEM:
            return { ...state, [action.data.cartItem.id]: action.data.cartItem }
        case DELETE_CART_ITEM:
            const newState = { ...state }
            delete newState[action.cartItemId]
            return newState
        default:
            return state;
    }
};

export default cartItemsReducer;
