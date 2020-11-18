import {followAC, setUsersAC, unfollowAC} from "../../State/Redux/users-reducer";
import {connect} from "react-redux";
import Users from "./Users";


let mapStateToProps = (state) => {
    return {
        usersArray: state.usersPage.usersArray
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        }
    }
}


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)


export default UsersContainer;