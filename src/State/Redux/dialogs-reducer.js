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
        {id: 1, name:"Mirabelle Tow",date: "17-Nov-20", message: 'Message item from state'}
    ],
    newMessageText: "Cowboy from state🤠"
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_MESSAGE:
            let newMessage = {
                id: 2, message: state.newMessageText, name: 'Mirabelle Tow',date: "17-Nov-20"
            };
            return {
                ...state,
                messagesArray: [...state.messagesArray, newMessage ],
                newMessageText: ''
            }

        case UPDATE_NEW_MESSAGE_TEXT: {
            return {
                ...state,
                newMessageText: action.newMText}
            }

        default:
            return state;
    }
}

export const addNewMessage = () => ({type: ADD_NEW_MESSAGE})
export const updateNewMessageTextActionCreator = (messageText) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newMText: messageText
})

export default dialogsReducer;