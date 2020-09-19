import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    HashRouter
} from "react-router-dom";
import RouterAdmin from './RouterAdmin';
import RouterAuth from './RouterAuth';
import RouterGuest from './RouterGuest';
import RouterSuperAdmin from './RouterSuperAdmin';


const RouterMain = () => {
    return (
        <HashRouter basename="/">
            <Switch>
                <Route path={"/super"} component={RouterSuperAdmin}/>
                <Route path={"/admin"} component={RouterAdmin}/>
                <Route path={"/auth"} component={RouterAuth}/>
                <Route path={"/"} component={RouterGuest}/>
            </Switch>
        </HashRouter>
    )
}

export default RouterMain
