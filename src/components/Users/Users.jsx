import React from 'react';
import {Avatar, Button, List, Pagination} from "antd";
import * as axios from "axios";
import userPhoto from '../../assets/images/userPhoto.png'
import styles from './Users.Module.css'

class Users extends React.Component {

    componentDidMount() {

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            });
    }

    render() {

        let pageCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        let pages = [];

        for (let i = 1; i <= pageCount; i++) {
            pages.push(i)
        }


        return (

            <div style={{padding: '15px'}}>

                {/*{
                    (this.props.users.map(u => (<div key={u.id}>
                            {<div>
                                <img style={{width: '50px'}} src={u.photos.small != null ? u.photos.small : userPhoto}
                                     alt=""/>
                            </div>}
                            <div>{u.name}</div>
                            <div>
                                {u.followed
                                    ? <Button type="primary" onClick={() => {
                                        this.props.unfollow(u.id)
                                    }}>Unfollow</Button>
                                    : <Button onClick={() => {
                                        this.props.follow(u.id)
                                    }}>Follow</Button>}
                            </div>
                        </div>))
                    )
                }*/}

                <List
                    itemLayout="horizontal"
                    dataSource={this.props.users}
                    renderItem={u => (
                        <List.Item>
                            <List.Item.Meta
                                key={u.id}
                                avatar={<Avatar src={u.photos.small != null ? u.photos.small : userPhoto}/>}
                                title={<a href="">{u.name}</a>}
                                status={u.status}
                            />
                            <div>
                                {u.followed
                                    ? <Button type="primary" onClick={() => {
                                        this.props.unfollow(u.id)
                                    }}>Unfollow</Button>
                                    : <Button onClick={() => {
                                        this.props.follow(u.id)
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

                <Pagination onChange={this.onPageChanged} defaultCurrent={this.props.currentPage} total={this.props.totalUsersCount}
                            defaultPageSize={this.props.pageSize}/>

            </div>

        )

    }

}


export default Users;