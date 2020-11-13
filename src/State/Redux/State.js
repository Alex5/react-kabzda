//action type
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

//our store

let store = {

    _state: {
        profileData: {
            postArray: [
                {id: 1, name: "John Week", message: "Hi world", like_counts: 12},
                {id: 2, name: "Alex Rose", message: "I'm progger men!", like_counts: 24},
            ],
            newPostText: "Cowboy from state🤠"
        },
        messageData: {
            dialogsArray: [
                {id: 1, name: 'Anika Lyons'},
                {id: 2, name: 'Malak Moyer'},
                {id: 3, name: 'Uzair Oneal'},
                {id: 4, name: 'Desiree Esquivel'}
            ],
            messagesArray: [
                {id: 1, message: 'Messages from state'},
            ],
            newMessageText: "Cowboy from state🤠"
        },
        sideBar: {},
    },

    getState() {
        return this._state
    },

    _rerenderEntireTree() {
        console.log()
    },

    subscribe(observer) {
        this._rerenderEntireTree = observer;
    },

    //dispatching methods

    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 6, name: "John Week", message: this._state.profileData.newPostText, like_counts: 0
            };

            this._state.profileData.postArray.push(newPost);
            this._state.profileData.newPostText = '';
            this._rerenderEntireTree(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profileData.newPostText = action.newText;
            store._rerenderEntireTree(this._state);
        }

        if (action.type === ADD_NEW_MESSAGE) {
            let newMessage = {
                id: 2, message: this._state.messageData.newMessageText
            };
            this._state.messageData.messagesArray.push(newMessage);
            this._state.messageData.newMessageText = '';
            this._rerenderEntireTree(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.messageData.newMessageText = action.newMText;
            store._rerenderEntireTree(this._state);
        }
    }

}


//action creator

export const addPostActionCreator = () => {
    return {
        type: 'ADD-POST'
    }
}

export const updateNewPostTextActionCreator = (postText) => ({type: UPDATE_NEW_POST_TEXT, newText: postText})

export const addNewMessage = () => {
    return {
        type: 'ADD-NEW-MESSAGE',
    }
}

export const updateNewMessageTextActionCreator = (messageText) => {

    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newMText: messageText
    }
}


export default store;
window.store = store;