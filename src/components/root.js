import React from 'react';
import NavBar from "./shared/NavBar/NavBar";
import {Route, Switch} from "react-router-dom";
import Home from "./home/home/Home";
import Profile from "./profile/Profile";
import 'antd/dist/antd.css';
function Root(props) {
    return (
        <>
            <NavBar/>
            <Switch>
                <Route path='/' component={Home} exact/>
                <Route path='/companies/company' component={Home} exact/>
                <Route path='/projects' component={Home} exact/>
                <Route path='/profile' component={Profile} exact/>
                <Route path='/files' component={Home} exact/>
                <Route path='/messages' component={Home} exact/>
                <Route path='/settings' component={Home} exact/>
            </Switch>
        </>
    );
}

export default Root;