import React from 'react';
import NavBar from "./shared/NavBar/NavBar";
import {Route, Switch} from "react-router-dom";
import Home from "../components/home/home/Home";
import Profile from "../components/profile/Profile";
import '../routes/route.css'

function Root(props) {
    return (
        <div className="wrapper">
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
        </div>
    );
}

export default Root;