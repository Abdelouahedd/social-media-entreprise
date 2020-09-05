import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import logger from "redux-logger";
import AuthReducer from "../reducers/authReducer";
import thunk from 'redux-thunk';
import usersReducer from "../reducers/usersReducer";
import PostsReducer from "../reducers/postsReducer";

const rootReducers = combineReducers({auth: AuthReducer, users: usersReducer, posts: PostsReducer});

export default createStore(rootReducers,
    compose(
        applyMiddleware(logger, thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);