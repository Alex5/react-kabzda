const axios = require('axios').default;

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '24aa4446-b73e-4b0c-92e6-46cfd2e24249'
    }
});


export const profileApi = {
    setProfileInfo(userId) {
        return instance.get(`profile/${userId}`)
            .then(response => response.data)
    }
}


export const usersApi = {
    getUsers(currentPage, pageSize) {
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
    },

}

export const authApi = {
    checkAuth () {
        return (
            instance.get(`auth/me`)
                .then(response => response.data)
        )
    }
}

