import React from "react";
import {Input} from "antd";
import TextField from "@material-ui/core/TextField";

const MyPostFormComponent = (props) => {
    return (
        <div>
            <Input props={props} placeholder="Basic usage" />
        </div>

    )
}

export default MyPostFormComponent;