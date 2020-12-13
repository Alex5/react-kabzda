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
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {withRouter} from "react-router";
import {compose} from "redux";
import {initializeApp} from "./Redux/app-reducer";
import AppPreloader from "./components/common/preloader/AppPreloader";

class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp();
    }

    render() {

        if (!this.props.initialized) {
            return <AppPreloader />
        }

        return (
            <div className="page">
                <HeaderContainer/>
                <div className='app-wrapper'>
                    <Navbar state={this.props.state}/>
                    <div className="app-wrapper-content">
                        <Route path={'/messages'} render={() => (
                            <MessagesArea state={this.props.state}/>)}/>
                        <Route path={`/profile/:userId?`}
                               render={() => (<ProfileContainer/>)}/>
                        <Route path={'/news'}
                               render={() => (<News/>)}/>
                        <Route path={'/music'}
                               render={() => (<Music/>)}/>
                        <Route path={'/setting'}
                               render={() => (<Setting/>)}/>
                        <Route path={'/users'}
                               render={() => (<UsersContainer/>)}/>
                        <Route path={'/login'}
                               render={() => (<Login/>)}/>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    login: state.auth.login,
    initialized: state.app.initialized
})

export default compose(withRouter, connect(mapStateToProps, {initializeApp}))(App)
