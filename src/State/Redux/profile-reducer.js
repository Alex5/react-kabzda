const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    postArray: [
        {id: 1, name: "John Week", message: "Hi world", like_counts: 12}
    ],
        newPostText: "Cowboy from state🤠"
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 6, name: "John Week", message: state.newPostText, like_counts: 0
            };
            state.postArray.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }

}

export const addPostActionCreator = () => ({type: 'ADD-POST'})
export const updateNewPostTextActionCreator = (postText) => ({type: UPDATE_NEW_POST_TEXT, newText: postText})

export default profileReducer;