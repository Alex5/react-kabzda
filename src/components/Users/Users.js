import React from 'react';
import {Button} from "antd";
import * as axios from "axios";
import userPhoto from '../../assets/images/userPhoto.png'

const Users = (props) => {

    if (props.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                props.setUsers(response.data.items)
            });
    }


    return (props.users.map(u => (<div key={u.id}>
            {/*<div>
                <img style={{width: '50px'}} src={u.photos.small != null ? u.photos.small : userPhoto} alt=""/>
            </div>*/}
            <div>{u.name}</div>
            <div>
                {u.followed
                    ? <Button type="primary" onClick={() => {
                        props.unfollow(u.id)
                    }}>Unfollow</Button>
                    : <Button onClick={() => {
                        props.follow(u.id)
                    }}>Follow</Button>}
            </div>
        </div>))
    )
}

export default Users;