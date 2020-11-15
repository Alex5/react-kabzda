//reducers
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";


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
                {id: 1, message: 'MessagesArea from state'},
            ],
            newMessageText: "Cowboy from state🤠"
        },
        sideBar: {
            menuItemsArray: [
                {id:1, menuItemName: 'Profile', activity: true, pathName: "/messages" },
                {id:2, menuItemName: 'Message', activity: true},
                {id:3, menuItemName: 'News', activity: true},
                {id:4, menuItemName: 'Music', activity: true},
                {id:5, menuItemName: 'Setting', activity: true}
            ],
            friendOnlineArray: [
                {id: 1, online: true},
                {id: 2, online: true},
                {id: 3, online: true}
            ]
        },
    },

    getState() {
        return this._state
    },

    _callSubscriber() {},

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    //dispatching methods

    dispatch(action) {

        //reducers

        this._state.profileData = profileReducer(this._state.profileData, action)
        this._state.messageData = dialogsReducer(this._state.messageData, action)
        this._state.sideBar = sidebarReducer(this._state.sideBar, action)

        this._callSubscriber(this._state)
    }

}



//action creator







export default store;
window.store = store;