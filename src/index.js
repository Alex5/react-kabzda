import ReactDOM from "react-dom";
import React from "react";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import store from "./Redux/redux-store";
import {Provider} from "react-redux";

ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App state={store.getState()} />
            </Provider>
        </BrowserRouter>,
    document.getElementById('root')
);



/*export let rerenderEntireTree = (state) => {

}*/

//state={state} dispatch={store.dispatch.bind(store)} store={store}

// rerenderEntireTree(store.getState());

/*
store.subscribe(
    () => {
        let state = store.getState();
        rerenderEntireTree(state);
    }
);
*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals







