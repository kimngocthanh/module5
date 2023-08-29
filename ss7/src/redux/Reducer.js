import { GET_ALL_USERS_SUCCESS, DELETE_USERS } from "./Types";


const initialState = {
    users: [],
    delete: null,
};

const userReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case GET_ALL_USERS_SUCCESS:
            return { ...state, users: payload };
        default:
            return state;

    }
}

export default userReducer;