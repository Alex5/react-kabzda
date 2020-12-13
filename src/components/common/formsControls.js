import React from 'react';
import {Input} from "antd";
import styles from "./formsControls.module.css";

export const emailField = ({input, label, type, meta}) => {

    const hasError = meta.touched && meta.error;

    return (
        <div className={styles.emailFieldArea}>
            <div className={hasError ? styles.emailFieldError : ""}>
                <input {...input} placeholder={label} type={type}/>
                {hasError && <span>{meta.error}</span>}
            </div>
        </div>

    )
}

export const MyPostFormComponent = ({input, meta}) => {

    const {TextArea} = Input;

    return (
        <div className={styles.myPostForm}>
            <TextArea {...input} placeholder="Enter you`re message"/>
            {meta.error ? <button hidden={true}>Post</button> : <button >Post</button>}
        </div>
    )
}

