import React from "react";
import {Skeleton} from "antd";
import styles from './Preloader.module.css'

const Preloader = () => {
    return (
        <div className={styles.preloader}>
            <Skeleton avatar={{ rows: 8}} paragraph={{ rows: 8 }} active />
        </div>

    )
}

export default Preloader;
