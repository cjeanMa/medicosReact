import React from 'react'
import {Link} from "react-router-dom"

const RouterAdmin = () => {
    return (
        <>
            Router Admin
            <Link to={"/admin"}>Admin</Link>
                <Link to={"/profesional"}>Doctor</Link>
                <Link to={"/paciente"}>Paciente</Link>
                <Link to={"/"}>Home</Link>
        </>
    )
}

export default RouterAdmin
