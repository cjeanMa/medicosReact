import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import AuthLogin from '../modules/auth/screens/AuthLogin'
import AuthRegisterDoctor from '../modules/auth/screens/AuthRegisterDoctor'
import AuthRegisterPacient from '../modules/auth/screens/AuthRegisterPacient'

const RouterAuth = () => {
    return (
        <Switch>
            <Route path={"/auth/registropaciente"} component={AuthRegisterPacient} />
            <Route path={"/auth/registromedico"} component={AuthRegisterDoctor} />
            <Route path={"/auth/login"} component={AuthLogin} />
            <Redirect to={"/auth/login"}/>
        </Switch>
    )
}

export default RouterAuth
