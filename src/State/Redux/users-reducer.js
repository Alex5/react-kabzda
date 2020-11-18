import React from "react";
import {Avatar} from "antd";
import {UserOutlined} from "@ant-design/icons";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    usersArray: [
        {
            userId: 1, photoAvatar: <Avatar size="large" icon={<UserOutlined/>}/>, followed: true,
            name: 'Tom Cruise', status: 'i like programming', livePlace: {city: 'Russia', country: 'Saint-P'}
        },
        {
            userId: 2, photoAvatar: <Avatar size="large" icon={<UserOutlined/>}/>, followed: false,
            name: 'Tom Cruise', status: 'i dont like programming', livePlace: {city: 'Russia', country: 'Saint-P'}
        }
    ]

}
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                usersArray: state.usersArray.map(u => {
                    if (u.userId === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        };

        case UNFOLLOW: {
            return {
                ...state,
                usersArray: state.usersArray.map(u => {
                    if (u.userId === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        }
        case SET_USERS:
            return {...state, usersArray: [...state.usersArray, ...action.users]}
        default:
            return state;
    }

}

export const followAC = (userId) => ({type: FOLLOW, userId})
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users) => ({type: SET_USERS, users})

export default usersReducer;