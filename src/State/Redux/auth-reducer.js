const SET_USER_AUTH = 'ADD-NEW-MESSAGE';

let initialState = {
    data: [{
            id: null,
            email: null,
            login: null
        }],
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_AUTH:
            return {
                ...state, auth: action.data
            }
        default:
            return state;
    }
}

export const setUserAuth = (id, email, login) => ({type: SET_USER_AUTH}, {data: id, email, login})

export default authReducer;