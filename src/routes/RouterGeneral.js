import React from 'react'
import { Route, Link, Redirect } from "react-router-dom"
import { Navbar, Switch } from 'react-materialize';
import LandingPage from '../modules/general/pages/LandingPage';
import Especialistas from '../modules/general/pages/Especialistas';
import InformationEsp from '../modules/general/pages/InformationEsp';
import ScreenLogin from '../modules/general/pages/ScreenLogin';

const RouterGeneral = () => {

    
    return (
        <>
                <Route path={"/especialista/:id"} component={InformationEsp} />
                <Route path={"/especialistas"} component={Especialistas} />
                <Route path={"/login"} component={ScreenLogin} />
                <Route exact path={"/"} component={LandingPage} />
            
        </>
    )
}

export default RouterGeneral
