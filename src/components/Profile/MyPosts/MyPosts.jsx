import React from 'react';
import styles from './MyPosts.module.css'
import Post from "./Post/Posts";
import {Field, reduxForm, submit} from "redux-form";
import {requiredField} from "../../../validation/SyncValidationForm";
import {MyPostFormComponent} from "../../common/formsControls";


const MyPostsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field placeholder={"Enter you're message"}
                   name={"message"} type={"text"}
                   component={MyPostFormComponent}
                   validate={requiredField}
                   type={"TextArea"}
            />
        </form>
    )
}

const MyPostsReduxForm =  reduxForm({form: 'profilePost'})(MyPostsForm)

const MyPosts = (props) => {

    const onSubmit = (formData) => {
        props.addPostActionCreator(formData.message)
    }

    let postElements = props.posts.map(p => (
        <Post id={p.id} name={p.name} message={p.message} like_counts={p.likesCount} key={p.id}/>))


    return (
        <div className={styles.posts__area}>
            <div className={styles.posts__area__input}>
                <h3>New posts</h3>
                <MyPostsReduxForm onSubmit={onSubmit} />

            </div>
            <h3>My posts:</h3>
            <div>
                {postElements}
            </div>
        </div>
    )
}




export default MyPosts;