import React from 'react';
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {login} from "../../Redux/auth-reducer";
import {maxLength15, minLength2, requiredField} from "../../validation/SyncValidationForm";
import {emailField} from "../common/formsControls";
import styles from "./../common/formsControls.module.css";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    name={"email"}
                    component={emailField}
                    validate={[requiredField, maxLength15, minLength2]}
                    label="Email"
                    type="input"
                />
            </div>
            <div>
                <Field placeholder={"Password"}
                       name={"password"}
                       type={"password"}
                       component={emailField}
                       validate={[requiredField, maxLength15, minLength2]}
                       label="Password"
                />
            </div>
            <div>
                <Field component="input" name={"rememberMe"} type={"checkbox"}/> remember me
            </div>
            <div className={styles.commonError}>
                {props.error && <div>{props.error}</div>}
            </div>
            <div>
                <button>Login</button>
            </div>

        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    }

    if (props.isAuth) {
        return <Redirect to={"profile"}/>
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);