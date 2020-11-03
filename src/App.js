import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Navbar from "./components/Navbar/Navbar";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Setting from "./components/Setting/Setting";



const App = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path={'/messages'} component={Dialogs} />
                    <Route path={'/profile'} component={Profile} />
                    <Route path={'/news'} component={News} />
                    <Route path={'/music'} component={Music} />
                    <Route path={'/setting'} component={Setting} />
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
