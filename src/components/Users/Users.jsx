import React from 'react';
import {Avatar, Button, List, PageHeader, Pagination} from "antd";
import userPhoto from '../../assets/images/userPhoto.png'
import Preloader from "../common/preloader/Preloader";
import {NavLink} from "react-router-dom";

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
                                    <NavLink to={'/profile/' + u.id}> {<Avatar size="large"
                                                                               src={u.photos.small != null ? u.photos.small : userPhoto}/>}</NavLink>}

                                title={
                                    <NavLink to={'/profile/' + u.id}>{u.name}</NavLink>}
                                description={'Status: ' + u.status}
                            />
                        <div>
                            {u.followed
                                ? <Button type="primary" onClick={() => {
                                    props.unfollow(u.id)
                                }}>Unfollow</Button>
                                : <Button onClick={() => {
                                    props.follow(u.id)
                                }}>Follow</Button>}
                        </div>

                    </List.Item>
                )}
            />
            {/* <div>
                    {pages.map(p => {
                        return <span onClick={() => {this.onPageChanged(p);}} className={this.props.currentPage ===  p && styles.selectedPage}>{p}</span>
                    })}
                </div>*/}

            <Pagination onChange={props.onPageChanged} defaultCurrent={props.currentPage} total={props.totalUsersCount}
                        defaultPageSize={props.pageSize}/>

        </div>
    )
}


export default Users;