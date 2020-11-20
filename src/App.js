import './App.css';
import React from 'react';
import AppHeader from "./components/Header/AppHeader";
import Profile from "./components/Profile/Profile";
import Navbar from "./components/Sidebar/Navbar";
import MessagesArea from "./components/Messages/MessagesArea";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Setting from "./components/Setting/Setting";
import {Route} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";


const App = (props) => {


    return (
         <div className="page">
             <AppHeader/>
             <div className='app-wrapper'>
                 <Navbar state={props.state}/>
                 <div className="app-wrapper-content">
                     <Route path={'/messages'} render={() => (
                         <MessagesArea state={props.state}/>)}/>
                     <Route path={'/profile'} render={() => (<Profile />)}/>
                     <Route path={'/news'} render={() => (<News/>)}/>
                     <Route path={'/music'} render={() => (<Music/>)}/>
                     <Route path={'/setting'} render={() => (<Setting/>)}/>
                     <Route path={'/users'} render={() => (<UsersContainer />)}/>
                 </div>
             </div>
         </div>
    );
}


export default App;
