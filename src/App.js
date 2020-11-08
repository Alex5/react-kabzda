import './App.css';
import React from 'react';
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Navbar from "./components/Sidebar/Navbar";
import Messages from "./components/Messages/Messages";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Setting from "./components/Setting/Setting";
import {Route} from "react-router-dom";

const App = (props) => {
    return (
        <div className="page">
            <Header/>
            <div className='app-wrapper'>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path={'/messages'} render={() => (
                        <Messages state={props.state.messageData}/>)}/>
                    <Route path={'/profile'}
                           render={() => (
                               <Profile state={props.state.profileData} addPost={props.addPost}/>)}/>
                    <Route path={'/news'} render={() => (<News/>)}/>
                    <Route path={'/music'} render={() => (<Music/>)}/>
                    <Route path={'/setting'} render={() => (<Setting/>)}/>
                </div>
            </div>
        </div>
    );
}


export default App;
