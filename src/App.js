import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Navbar from "./components/Navbar/Navbar";
import Messages from "./components/Messages/Messages";
import {BrowserRouter, Route} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Setting from "./components/Setting/Setting";

const App = (props) => {

    return (
        <BrowserRouter>
            <Header/>
            <div className='app-wrapper'>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path={'/messages'} render={() => (
                        <Messages state={props.state.messageData}/>)}/>
                    <Route path={'/profile'} render={() => (<Profile state={props.state.profileData} />)}/>
                    <Route path={'/news'} render={() => (<News/>)}/>
                    <Route path={'/music'} render={() => (<Music/>)}/>
                    <Route path={'/setting'} render={() => (<Setting/>)}/>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
