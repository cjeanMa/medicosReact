import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import RouterAdmin from './RouterAdmin';
import RouterAuth from './RouterAuth';
import RouterGuest from './RouterGuest';
import RouterSuperAdmin from './RouterSuperAdmin';


const RouterMain = () => {
    return (
        <Router>
            <Switch>
                <Route path={"/super"} component={RouterSuperAdmin}/>
                <Route path={"/admin"} component={RouterAdmin}/>
                <Route path={"/auth"} component={RouterAuth}/>
                <Route path={"/"} component={RouterGuest}/>
            </Switch>
        </Router>
    )
}

export default RouterMain
