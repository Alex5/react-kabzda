import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {setAuthThunkCreator} from "../../Redux/auth-reducer";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.setAuthThunkCreator(this.props.login);
    }

    render() {
        return <Header {...this.props}/>
    }
}
const mapStateToProps = (state) => ({
    isAuth: state.authData.isAuth,
    login: state.authData.login,
});

export default connect(mapStateToProps, {setAuthThunkCreator})(HeaderContainer);