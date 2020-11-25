import React from "react";
import {Spin} from "antd";
import styles from './Preloader.module.css'

const Preloader = () => {
    return (
        <div className={styles.preloader}>
            <Spin />
        </div>

    )
}

export default Preloader;
