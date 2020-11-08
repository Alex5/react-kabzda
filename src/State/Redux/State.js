import {rerenderEntireTree} from "../../render";

const state = {

    profileData: {
        postArray: [
            {id: 1, name: "John Week", message: "Hi world", like_counts: 12},
            {id: 2, name: "Alex Rose", message: "I'm progger men!", like_counts: 24},
        ],
    },

    messageData: {
        dialogsArray: [
            {id: 1, name: 'Anika Lyons'},
            {id: 2, name: 'Malak Moyer'},
            {id: 3, name: 'Uzair Oneal'},
            {id: 4, name: 'Desiree Esquivel'}
        ],
        messagesArray: [
            {id: 1, message: 'Incoming messages'},
        ]
    }
};

export let addPost = (postMessage) => {

    let newPost = {
        id: 6, name: "John Week", message: postMessage, like_counts: 0
    };

    state.profileData.postArray.push( newPost );
    rerenderEntireTree(state);
}

export default state;