import React from 'react'
import { Route, Switch } from 'react-router-dom';

import LandingFooter from '../modules/guest/components/LandingFooter';
import LandingHeader from '../modules/guest/components/LandingHeader';
import LandingPage from '../modules/guest/screens/LandingPage';
import ScreenMedicos from '../modules/guest/screens/ScreenMedicos';
import InfoMed from '../modules/guest/screens/InfoMed';


const RouterGuest = () => {
    return (
        <>
            <LandingHeader />
            <main>
                <Switch>
                    <Route path={"/medicos/:id"} component={InfoMed} />
                    <Route path={"/medicos"} component={ScreenMedicos} />
                    <Route path={"/"} component={LandingPage} />
                    
                </Switch>
            </main>
            <LandingFooter />
        </>
    )
}

export default RouterGuest;