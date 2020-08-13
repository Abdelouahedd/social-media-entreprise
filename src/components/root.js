import React from 'react';
import NavBar from "./shared/NavBar/NavBar";
import {Route, Switch} from "react-router-dom";
import Home from "../components/home/home/Home";
import Profile from "../components/profile/Profile";
import '../routes/route.css'
import CreateRoutes from '../routes/route'

function Root(props) {
    return (
        <div className="wrapper">
            <NavBar/>
            <CreateRoutes/>
        </div>
    );
}

export default Root;