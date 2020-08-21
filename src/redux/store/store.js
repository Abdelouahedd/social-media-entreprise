import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import logger from "redux-logger";
import AuthReducer from "../reducers/authReducer";
import thunk from 'redux-thunk';

export default createStore(
    combineReducers({ auth: AuthReducer }),
    {},
    compose(
        applyMiddleware(logger, thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);