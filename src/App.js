import './App.css';
import React from 'react';
import Navbar from "./components/Sidebar/Navbar";
import MessagesArea from "./components/Messages/MessagesArea";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Setting from "./components/Setting/Setting";
import {Route} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";


const App = (props) => {


    return (
        <div className="page">
            <HeaderContainer/>
            <div className='app-wrapper'>
                <Navbar state={props.state}/>
                <div className="app-wrapper-content">
                    <Route path={'/messages'} render={() => (
                        <MessagesArea state={props.state}/>)}/>
                    <Route path={'/profile/:userId?'} render={() => (<ProfileContainer/>)}/>
                    <Route path={'/news'} render={() => (<News/>)}/>
                    <Route path={'/music'} render={() => (<Music/>)}/>
                    <Route path={'/setting'} render={() => (<Setting/>)}/>
                    <Route path={'/users'} render={() => (<UsersContainer/>)}/>
                </div>
            </div>
        </div>
    );
}


export default App;
