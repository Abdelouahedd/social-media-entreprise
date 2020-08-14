import React, {lazy} from "react";
import {TransitionGroup, CSSTransition} from "react-transition-group";
import {Route, Switch, withRouter} from "react-router-dom";
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

const Home = lazy(() => import( "../components/home/home/Home"));
const Group = lazy(() => import( "../components/groups/group"));
const Profile = lazy(() => import( "../components/profile/Profile"));
const Messages = lazy(() => import( "../components/messages/Messages"));
const AcountSettings = lazy(() => import( "../components/settings/account-setting"));

const CreateRoutes = () => (
        <Switch>
            <Route path='/' component={Home} exact/>
            <Route path='/companies/company' component={Group} exact/>
            <Route path='/projects' component={Home} exact/>
            <Route path='/profile' component={Profile} exact/>
            <Route path='/files' component={Home} exact/>
            <Route path='/messages' component={Messages} exact/>
            <Route path='/settings' component={AcountSettings} exact/>
        </Switch>

);
export default CreateRoutes;

