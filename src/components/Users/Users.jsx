import React from "react";
import {Button} from "antd";

debugger

let Users = (props) => {


    return (props.usersArray.map(u => (<div key={u.userId} name={u.name}>
            <div>{u.photoAvatar}</div>
            <div>{u.name}</div>
            <div>{u.status}</div>
            <div>{u.livePlace.city}</div>
            <div>{u.livePlace.country}</div>
            <div>
                {u.followed
                    ? <Button onClick={() => {props.follow(u.userId)}}>Follow</Button>
                    : <Button onClick={() => {props.unfollow(u.userId)}}>Unfollow</Button>}
            </div>
        </div>))
    )
}

debugger

export default Users;