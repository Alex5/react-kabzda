let initialState = {
        menuItemsArray: [
            {id:1, menuItemName: 'Profile', activity: true, pathName: "profile"},
            {id:2, menuItemName: 'Message', activity: true, pathName: "message"},
            {id:3, menuItemName: 'News', activity: true, pathName: "news"},
            {id:4, menuItemName: 'Music', activity: true},
            {id:5, menuItemName: 'Setting', activity: true}
        ],
        friendOnlineArray: [
            {id: 1, online: true},
            {id: 2, online: true},
            {id: 3, online: true}
        ]
}

const sidebarReducer = (state = initialState, action) => {



    return state;
}

export default sidebarReducer;