import React, { lazy } from "react";
import { Route, Switch } from "react-router-dom";
import './route.css'



const Home = lazy(() => import("../components/home/home/Home"));
const Group = lazy(() => import("../components/groups/group"));
const Profile = lazy(() => import("../components/profile/Profile"));
const EditProfill = lazy(() => import("../components/profile/editProfil"));
const Messages = lazy(() => import("../components/messages/Messages"));
const AcountSettings = lazy(() => import("../components/settings/account-setting"));
const GroupProfil = lazy(() => import("../components/groupProfil/groupProfil"));

const CreateRoutes = () => (
    <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/companies/company' component={Group} exact />
        <Route path='/projects' component={Home} exact />
        <Route path='/profile/:id' component={Profile} exact />
        <Route path='/profile/edit' component={EditProfill} exact />
        <Route path='/files' component={Home} exact />
        <Route path='/messages' component={Messages} exact />
        <Route path='/settings' component={AcountSettings} exact />
        <Route path='/group/:id' component={GroupProfil} exact />
    </Switch>

);
export default CreateRoutes;

