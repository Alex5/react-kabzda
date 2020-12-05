import {profileApi} from "../Api/Api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const GET_STATUS_PROFILE = 'GET_STATUS_PROFILE';

let initialState = {
    posts: [
        {id: 1, name: 'Andy', message: 'Hi, how are you?', likesCount: 12},
        {id: 2, name: 'Andy', message: 'It\'s my first post', likesCount: 11},
        {id: 3, name: 'Andy', message: 'Blabla', likesCount: 11},
        {id: 4, name: 'Andy', message: 'Dada', likesCount: 11}
    ],
    newPostText: 'it-kamasutra.com',
    profile: null,
    status: ""
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case GET_STATUS_PROFILE: {
            return {
                ...state,
                status: action.status
            }
        }
        default:
            return state;
    }
}


export const addPostActionCreator = () => ({type: ADD_POST});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const getStatusProfile = (status) => ({type: GET_STATUS_PROFILE, status});
export const updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text})

export const getProfileThunkCreator = (userId) => {
    return (dispatch) => {
        profileApi.getProfile(userId).then(response => {
            dispatch(setUserProfile(response.data));
        });
    };
}
export const getStatusThunkCreator = (userId) => {
    return (dispatch) => {
        profileApi.getStatus(userId)
            .then(response => {
                dispatch(getStatusProfile(response.data));
            });
    };
}

export const updateStatusThunkCreator = (status) => (dispatch) => {
    profileApi.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getStatusProfile(status));
            }
        });
}


export default profileReducer;