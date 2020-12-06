import {authApi} from "../Api/Api";

const SET_USER_DATA = 'SET_USER_DATA';
const SET_LOGIN_DATA = 'SET_LOGIN_DATA';

let initialState = {
    id: null,
    login: null,
    isAuth: false,
    formData: {
        email: null,
        login: null,
        rememberMe: null
    },
    captcha: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        case SET_LOGIN_DATA:
            return {
                ...state,
                ...action.formData,
                isAuth: true,
                rememberMe: true
            }

        default:
            return state;
    }
}


export const setAuthUserData = (id, login, email) => ({type: SET_USER_DATA, data: {id, login, email}})
export const setLoginUserData = (email, password, rememberMe) => ({
    type: SET_LOGIN_DATA,
    formData: {email, password, rememberMe}
})

export const setAuthThunkCreator = (id, login, email) => (dispatch) => {
    authApi.checkAuth()
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(setAuthUserData(email, id, login));
            }
        });
}
export const setLoginThunkCreator = (formData) => (dispatch) => {
    authApi.setAuthLogin()
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(setLoginUserData(formData));
            }
        });
}


export default authReducer;