import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {
    follow, getUsersThunkCreator,
    setCurrentPage, setTotalUsersCount,
    setUsers, toggleIsFetching, toggleIsFollowingProgress,
    unfollow
} from "../../Redux/users-reducer";
import {compose} from "redux";
import Preloader from "../common/preloader/Preloader";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsersThunkCreator(pageNumber);
    }


    render() {

        let pageCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        let pages = [];

        for (let i = 1; i <= pageCount; i++) {
            pages.push(i)
        }

        return (
            <div>
                {this.props.isFetching
                    ? <Preloader/>
                    : <Users users={this.props.users}
                           follow={this.props.follow}
                           unfollow={this.props.unfollow}
                           onPageChanged={this.onPageChanged}
                           currentPage={this.props.currentPage}
                           totalUsersCount={this.props.totalUsersCount}
                           pageSize={this.props.pageSize}
                           isFetching={this.props.isFetching}
                           toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
                           followingInProgress={this.props.followingInProgress}

                    />
                }
            </div>
        )

    }

}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
}

export default compose(
    connect(mapStateToProps, {
        follow, unfollow, setUsers, setCurrentPage,
        setTotalUsersCount, toggleIsFetching, toggleIsFollowingProgress, getUsersThunkCreator
    })
)(UsersContainer)


