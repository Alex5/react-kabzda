const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_PROFILE_INFO = 'SET_PROFILE_INFO';

let initialState = {
    postArray: [
        {
            id: 1,
            name: "John Week",
            message: "Integer nec lacus eget erat ullamcorper dictum dignissim ac ex. Proin vitae purus quis urna suscipit sagittis. Nullam iaculis malesuada enim eget viverra. Fusce quis justo sit amet libero bibendum molestie sit amet commodo lacus. Praesent cursus sodales tellus, vel congue ex porttitor sit amet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque id lacus nec purus hendrerit venenatis. Ut suscipit diam a enim maximus commodo. In viverra rhoncus erat, id vulputate dolor dignissim in. Pellentesque accumsan nulla elit, et sodales sem iaculis sed. Nulla lectus risus, auctor quis luctus sed, commodo tincidunt nulla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent convallis, dolor ut scelerisque faucibus, tortor quam pharetra mauris, et fringilla purus ante at lectus. Nulla sollicitudin diam gravida ligula interdum, vitae accumsan metus condimentum. Quisque consectetur libero vel gravida vulputate. Suspendisse et ultrices risus.",
            like_counts: 12
        }
    ],
    newPostText: "Cowboy from state🤠",
    profile: null
}
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 6, name: "John Week", message: state.newPostText, like_counts: 0
            };
            const stateCopy = {...state}
            stateCopy.postArray = [...state.postArray];
            stateCopy.postArray.push(newPost)
            stateCopy.newPostText = '';
            return stateCopy;


        case UPDATE_NEW_POST_TEXT: {
            const stateCopy = {...state}
            stateCopy.newPostText = action.newText;
            return stateCopy;
        }
        case SET_PROFILE_INFO: {
            return {...state, profile: action.profile}
        }
        default:
            return state;
    }

}

export const addPostActionCreator = () => ({type: 'ADD-POST'})
export const updateNewPostTextActionCreator = (postText) => ({type: UPDATE_NEW_POST_TEXT, newText: postText})
export const setProfileInfo = (profile) => ({type: SET_PROFILE_INFO, profile})
export default profileReducer;