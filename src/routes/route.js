import React from "react";
import {TransitionGroup, CSSTransition} from "react-transition-group";
import {Route, Switch, withRouter} from "react-router-dom";
import Home from "../components/home/home/Home";
import Profile from "../components/profile/Profile";
import Group from "../components/groups/group";
import './route.css'

const AnimatedSwitch = withRouter(({location}) => (
    <TransitionGroup>
        <CSSTransition key={location.key} classNames="slide" timeout={1000}>
            <Switch location={location}>
                <Route path='/' component={Home} exact/>
                <Route path='/companies/company' component={Home} exact/>
                <Route path='/projects' component={Home} exact/>
                <Route path='/profile' component={Profile} exact/>
                <Route path='/files' component={Home} exact/>
                <Route path='/messages' component={Home} exact/>
                <Route path='/settings' component={Home} exact/>
            </Switch>
        </CSSTransition>
    </TransitionGroup>
));

const CreateRoutes = () => (
    <Switch>
        <Route path='/' component={Home} exact/>
        <Route path='/companies/company' component={Group} exact/>
        <Route path='/projects' component={Home} exact/>
        <Route path='/profile' component={Profile} exact/>
        <Route path='/files' component={Home} exact/>
        <Route path='/messages' component={Home} exact/>
        <Route path='/settings' component={Home} exact/>
    </Switch>
);
export default CreateRoutes;

