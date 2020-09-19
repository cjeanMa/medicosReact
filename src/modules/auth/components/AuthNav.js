import React from 'react'
import { Link } from 'react-router-dom'
import AuthRegisterDoctor from '../screens/AuthRegisterDoctor'
import AuthRegisterPacient from '../screens/AuthRegisterPacient'

const AuthNav = () => {
    return (
        <div className="row mt-3">
            <ul>
                <li><Link to={"/auth/registropaciente"}> Crear cuenta Paciente</Link></li>
                <li><Link to={"/auth/registromedico"}> Crear cuenta Medico  </Link></li>
            </ul>
        </div>
    )
}

export default AuthNav
