import React from 'react'
import {Link} from "react-router-dom"

const RouterPacient = () => {
    return (
        <div>
            Router Pacient
            <Link to={"/admin"}>Admin</Link>
            <Link to={"/profesional"}>Doctor</Link>
            <Link to={"/paciente"}>Paciente</Link>
            <Link to={"/"}>Home</Link>
        </div>
    )
}

export default RouterPacient
