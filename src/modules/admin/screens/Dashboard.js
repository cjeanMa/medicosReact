import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import FooterAdmin from '../components/FooterAdmin'
import InformacionMedico from '../components/InformacionMedico'
import NavbarAdmin from '../components/NavbarAdmin'
import Pacientes from '../components/Pacientes'
import SideBarAdmin from '../components/SideBarAdmin'
import "../styles/admin.css"
const Dashboard = () => {
    return (
        <>
            <div id="wrapper">
                <SideBarAdmin />
                <div id="content-wrapper" class="d-flex flex-column">

                    <div id="content">

                        <NavbarAdmin />
                        <div class="container-fluid">
                            <Switch>
                                <Route path ={'/admin/dashboard/infoMedico'} component={InformacionMedico}></Route>
                                <Route path ={'/admin/dashboard/pacientes'} component={Pacientes}></Route>
                                <Redirect to={'/admin/dashboard/infoMedico'}></Redirect>
                            </Switch>

                        </div>

                    </div>


                </div>
            </div>
            <FooterAdmin/>
        </>

    )
}

export default Dashboard
