import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleWare from "redux-thunk";
import { reducer as formReducer } from 'redux-form'

let reducers = combineReducers({
    profileData: profileReducer,
    messageData: dialogsReducer,
    sideBar: sidebarReducer,
    usersPage: usersReducer,
    authData: authReducer,
    form: formReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleWare));

export default store;

window.store = store