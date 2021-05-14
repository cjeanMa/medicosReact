import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    HashRouter
} from "react-router-dom"
import RouterAdmin from './RouterAdmin'
import RouterDoctor from './RouterDoctor'
import RouterGeneral from './RouterGeneral'
import RouterPacient from './RouterPacient'

const RouterMain = () => {
    return (
        <Router basename="/">
            <Switch>
                <Route path={"/admin"} component={RouterAdmin}/>
                <Route path={"/profesional"} component={RouterDoctor}/>
                <Route path={"/paciente"} component={RouterPacient}/>
                <Route path={"/"} component={RouterGeneral}/>
            </Switch>
        </Router>
    )
}

export default RouterMain
