import React from "react";
import * as axios from 'axios';
import {Button} from "antd";


const Users = (props) => {
    if (props.usersArray.length === 0) {

        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            props.setUsers(response.data.items);
        });

    }

    return <div>
        {
            props.usersArray.map(u => <div key={u.id}>
                <div>
                    <div>
                        <img src={u.photos.small}/>
                    </div>
                    <div>
                        {u.followed
                            ? <Button onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow</Button>
                            : <Button onClick={() => {
                                props.follow(u.id)
                            }}>Follow</Button>}

                    </div>
                </div>
                <div>
                    <div>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </div>
                </div>
            </div>)
        }
    </div>
}

export default Users;