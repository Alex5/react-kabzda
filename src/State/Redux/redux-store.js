import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunk from "redux-thunk";

let reducers = combineReducers({
    profileData: profileReducer,
    messageData: dialogsReducer,
    sideBar: sidebarReducer,
    usersPage: usersReducer,
    authData: authReducer
})

let store = createStore(reducers, applyMiddleware(thunk));

export default store;

window.store = store