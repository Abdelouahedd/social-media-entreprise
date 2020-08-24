import React from 'react'
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ component: Component, ...rest }) => {
    const auth = useSelector(state => state.auth);
    return (
        <Route
            {...rest}
            render={props => {
                if (auth.token !== "") {
                    return <Component {...props} />;
                } else {
                    return (
                        <Redirect
                            to={{ pathname: "/sign", state: { from: props.location } }}
                        />
                    );
                }
            }}
        />
    )
}

export default PrivateRoute
