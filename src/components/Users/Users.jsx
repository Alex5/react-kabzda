import React from 'react';
import {Avatar, Button, Input, List, Pagination, Spin} from "antd";
import userPhoto from '../../assets/images/userPhoto.png'
import {NavLink} from "react-router-dom";
import {usersApi} from "../../Api/Api";


const Users = (props) => {

    return (
        <div style={{padding: '15px'}}>
            <List
                itemLayout="horizontal"
                dataSource={props.users}
                renderItem={u => (
                    <List.Item>
                        <List.Item.Meta
                            key={u.id}

                            avatar={
                                <NavLink to={`/profile/${u.id}`}>
                                    {<Avatar size="large" src={u.photos.small != null ? u.photos.small : userPhoto}/>}
                                </NavLink>}

                            title={
                                <NavLink to={`/profile/${u.id}`}>{u.name}</NavLink>}
                            description={'Status: ' + u.status}
                        />
                        <div>
                            {u.followed
                                ?
                                <Button loading={props.followingInProgress} type="primary" onClick={() => {
                                    props.toggleIsFollowingProgress(true)
                                    usersApi.unfollow(u.id).then(data => {
                                        if (data.resultCode === 0) {
                                            props.unfollow(u.id)
                                        }
                                        props.toggleIsFollowingProgress(false)
                                    });
                                }}>Unfollow</Button>


                                : <Spin spinning={props.followingInProgress} delay={500}>
                                    <Button onClick={() => {
                                        props.toggleIsFollowingProgress(true)
                                        usersApi.follow(u.id).then(data => {
                                            if (data.resultCode === 0) {
                                                props.follow(u.id)
                                            }
                                            props.toggleIsFollowingProgress(false)
                                        });
                                    }}>Follow</Button>
                                </Spin>
                            }

                        </div>
                    </List.Item>

                )}
            />


            <Pagination onChange={props.onPageChanged} defaultCurrent={props.currentPage} total={props.totalUsersCount}
                        defaultPageSize={props.pageSize}/>

        </div>
    )
}


export default Users;