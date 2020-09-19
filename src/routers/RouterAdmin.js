import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import Dashboard from '../modules/admin/screens/Dashboard'

const RouterAdmin = () => {
    return (
        <>
            <Switch>
                <Route path={"/admin/dashboard"} component={Dashboard} />
                <Redirect to={"/admin/dashboard"}></Redirect>
            </Switch>
        </>
    )
}

export default RouterAdmin
