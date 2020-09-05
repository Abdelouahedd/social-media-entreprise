const initState = {
    posts: [],
    post: {}
}

export default function PostsReducer(state = initState, action) {
    switch (action.type) {
        case "GET_ALL_POST":
            return {
                ...state.posts,
                posts: action.payload,
            };
        case "GET_POST":
            return {
                ...state.posts,
                post: action.payload
            };
        case "ADD_POST":
            return {
                ...state.posts,
                posts: [action.payload, ...state.posts]
            };
        case "UPDATE_POST":
            return {
                ...state.posts,
                posts: state.posts.map((post) => (post._id === action.payload._id) ? (post = action.payload) : post)
            };
        case "DELETE_POST":
            return {
                ...state.posts,
                posts: state.posts.filter(post => post._id !== action.payload)
            };
        default:
            return {
                ...state.posts
            };
    }
}