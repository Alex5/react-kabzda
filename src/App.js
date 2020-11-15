import './App.css';
import React from 'react';
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Navbar from "./components/Sidebar/Navbar";
import MessagesArea from "./components/Messages/MessagesArea";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Setting from "./components/Setting/Setting";
import {Route} from "react-router-dom";

const App = (props) => {
    return (
        <div className="page">
            <Header/>
            <div className='app-wrapper'>
                <Navbar state={props.state}/>
                <div className="app-wrapper-content">
                    <Route path={'/messages'} render={() => (
                        <MessagesArea store={props.store}/>)}/>
                    <Route path={'/profile'} render={() => (<Profile store={props.store}/>)}/>
                    <Route path={'/news'} render={() => (<News/>)}/>
                    <Route path={'/music'} render={() => (<Music/>)}/>
                    <Route path={'/setting'} render={() => (<Setting/>)}/>
                </div>
            </div>
        </div>
    );
}


export default App;
