import React from 'react'
import {Route, Redirect} from 'react-router-dom';

const PrivateRoute = ({component: Component, ...rest}) => {
    // const auth = useSelector(state => state.auth);
    let token = sessionStorage.getItem('jwtToken');
    return (
        <Route
            {...rest}
            render={props => {
                if (token) {
                    return <Component {...props} />;
                } else {
                    return (
                        <Redirect
                            to={{pathname: "/sign", state: {from: props.location}}}
                        />
                    );
                }
            }}
        />
    )
}

export default PrivateRoute
