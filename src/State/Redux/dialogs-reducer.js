const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
        dialogsArray: [
            {id: 1, name: 'Anika Lyons'},
            {id: 2, name: 'Malak Moyer'},
            {id: 3, name: 'Uzair Oneal'},
            {id: 4, name: 'Desiree Esquivel'}
        ],
        messagesArray: [
            {id: 1, message: 'MessagesArea from state'},
        ],
        newMessageText: "Cowboy from state🤠"
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_MESSAGE:
            let newMessage = {
                id: 2, message: state.newMessageText
            };
            state.newMessageText = '';
            state.messagesArray.push(newMessage);
            return state;
        case UPDATE_NEW_MESSAGE_TEXT: {
            state.newMessageText = action.newMText;
            return state;
        }
        default:
            return state;
    }
}

export const addNewMessage = () => ({type: 'ADD-NEW-MESSAGE'})
export const updateNewMessageTextActionCreator = (messageText) => ({ type: UPDATE_NEW_MESSAGE_TEXT, newMText: messageText })

export default dialogsReducer;