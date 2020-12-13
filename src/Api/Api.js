import {Redirect} from "react-router";

const axios = require('axios').default;

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '32a36e2c-f568-48a5-8774-8c8214a7c1d0'
    }
});

export const authAPI = {
    me() {
        return instance.get(`auth/me`);
    },
    login(email, password, rememberMe) {
        return instance.post(`/auth/login`, {email, password, rememberMe})
    },
    logout() {
        return instance.delete(`/auth/login`)
    }
}

export const profileApi = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`)
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status) {
        return instance.put(`profile/status`, { status: status });
    }
}


export const usersApi = {
    getUsers(currentPage, pageSize) {
        console.warn(`Obsolete method. Please use UsersAPI / Or create`)
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },

    unfollow(id) {
      return instance.delete(`follow/${id}`)
          .then(response => response.data)
    },

    follow(id) {
      return instance.post(`follow/${id}`)
          .then(response => response.data)
    }
}



