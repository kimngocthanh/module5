import { GET_ALL_USERS, DELETE_USERS } from "./Types";


const initialState = {
    users: [],
    delete: null,
};

const userReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case GET_ALL_USERS:
            return { ...state, users: payload };
        case DELETE_USERS:
            // const updatedUsers = state.users.filter(user => user.id !== payload);
            return { ...state, users: payload };
        default:
            return state;

    }
}

export default userReducer;