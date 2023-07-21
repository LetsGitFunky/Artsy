import csrfFetch, { storeCSRFToken } from './csrf';
import { receiveProducts } from './product';
import { receiveReviews } from './review';


const SET_CURRENT_USER = "session/setCurrentUser"
const REMOVE_CURRENT_USER = "session/removeCurrentUser"

const setCurrentUser = (user) => {
    // debugger
    return {
        type: SET_CURRENT_USER,
        user
    };
};

const storeCurrentUser = (user) => {
    // debugger
    if (user) {
        sessionStorage.setItem('currentUser', JSON.stringify(user));
    } else {
        // debugger
        sessionStorage.removeItem('currentUser');
    }
};

const removeCurrentUser = () => {
    // debugger
    return {
        type: REMOVE_CURRENT_USER
    };
};

export const login = (user) => async (dispatch) => {
    // debugger
    const { email, password } = user;
    const response = await csrfFetch(`/api/session`, {
        method: "POST",
        body: JSON.stringify({
            email,
            password
        })
    });
    const data = await response.json();
    dispatch(setCurrentUser(data.user));
    storeCurrentUser(data.user)
    return response;
};

export const logout = () => async (dispatch) => {
    const response = await csrfFetch(`/api/session`, {
        method: "DELETE",
    });
    storeCurrentUser(null)
    dispatch(removeCurrentUser());
    return response;
};

export const restoreSession = () => async dispatch => {
    const response = await csrfFetch('/api/session');
    storeCSRFToken(response);
    const data = await response.json();
    storeCurrentUser(data.user);  // Store the current user in sessionStorage
    dispatch(setCurrentUser(data.user));
    return response;
};

export const signup = (user) => async (dispatch) => {
    const { firstName, email, password } = user;
    const response = await csrfFetch("/api/users", {
        method: "POST",
        body: JSON.stringify({
        firstName,
        email,
        password
        })
    });
    const data = await response.json();
    storeCurrentUser(data.user);
    dispatch(setCurrentUser(data.user));
    return response;
};

export const fetchUser = (userId) => async (dispatch) => {
    const response = await csrfFetch(`/api/users/${userId}`)
    .then(response => response.json())
    .then((data) => {
        dispatch(receiveReviews(data.reviews))
        dispatch(setCurrentUser(data.user))
        dispatch(receiveProducts(data.products))
    })
    return response
}

export const updateUser = (user) => async (dispatch) => {
    const response = await csrfFetch(`/api/users/${user.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user)
    });

    if (response.ok) {
        const data = await response.json();
        dispatch(setCurrentUser(data.user));
        return null;
    } else {
        const data = await response.json();
        const { errors } = data;
        return errors;
    }
};


const initialState = { user: JSON.parse(sessionStorage.getItem('currentUser')) || null  };

const sessionReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_USER:
            return { ...state, user: action.user };
            case REMOVE_CURRENT_USER:
                return { ...state, user: null };
        default:
        return state;
    }
}

export default sessionReducer;
