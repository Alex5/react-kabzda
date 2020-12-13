import React from "react";
import {Spin} from 'antd';
import {LoadingOutlined} from '@ant-design/icons';
import style from './appPreloaderSpin.module.css'
import Title from "antd/lib/typography/Title";

const antIcon = <LoadingOutlined style={{fontSize: 68}} spin/>;

const AppPreloader = () => {
    return (
        <div className={style.appPreloaderSpin}>
            <div >
                <Title>React Social Network</Title>
            </div>
            <div>
                <Spin size={"large"} indicator={antIcon}/>
            </div>
        </div>

    )
}

export default AppPreloader;

