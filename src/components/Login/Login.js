import React from "react";
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {setLoginThunkCreator} from "../../Redux/auth-reducer";
import {authWithRedirect} from "../../hoc/withAuthRedirect";


class Login extends React.Component {


    onSubmit = (formData) => {
        console.log(formData)
        this.props.setLoginThunkCreator(formData)
    }

    render() {
        return (
            <div>
                <div><h1>Login</h1></div>
                <LoginReduxForm onSubmit={this.onSubmit}/>
            </div>
        );
    }
};

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="email" component="input" type="text" placeholder={"Enter your email"}/>
            </div>
            <div>
                <Field name="password" component="input" type="text" placeholder={"Enter your password"}/>
            </div>
            <div>
                <Field name="rememberMe" component="input" type="checkbox" placeholder={"enter your password"}/>Remember
                me
            </div>
            <div>
                <button>Submit</button>
            </div>
        </form>
    );
}


const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

let mapStateToProps = (state) => {
    return {
        formData: {
            email: state.authData.email,
            login: state.authData.login,
            rememberMe: state.authData.rememberMe
        }
    }
}

export default connect(mapStateToProps, {setLoginThunkCreator})(Login)

