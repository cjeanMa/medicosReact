import React from 'react'
import {Link} from "react-router-dom"

const RouterDoctor = () => {
    return (
        <div>
            Router Doctor
            <Link to={"/admin"}>Admin</Link>
            <Link to={"/profesional"}>Doctor</Link>
            <Link to={"/paciente"}>Paciente</Link>
            <Link to={"/"}>Home</Link>
        </div>
    )
}

export default RouterDoctor
