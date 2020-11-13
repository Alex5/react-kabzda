import React from "react";
import styles from "./DialogsItem.module.css";
import {NavLink} from "react-router-dom";

const DialogsItem = (props) => {

    let path = '/messages/' + props.id

    return (
        <div className={styles.dialogs__dialog}>
            <NavLink activeClassName={styles.active} className={styles.dialogItem} to={path}>
                <div>{props.name}</div>
            </NavLink>
        </div>
    )
}

export default DialogsItem;