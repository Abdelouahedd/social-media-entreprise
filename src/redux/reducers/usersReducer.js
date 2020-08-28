const initState = {
    users: []
}

export default function UsersReducer(state = initState, action) {
    switch (action.type) {
        case "GET_ALL_USERS":
            return {
                ...state.users
            };
        case "GET_USER":
            return state.users.find(user => user._id === action.id);
        case "UPDATE_USER":
            return {
                ...state,
                users: state.users.map((user) => user._id === action.payload._id ? (user = action.payload) : user)
            };
        default:
            return {
                ...state.users
            };
    }
}