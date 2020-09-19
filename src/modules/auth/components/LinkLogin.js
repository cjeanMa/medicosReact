import React from 'react'
import { Link } from 'react-router-dom'

const LinkLogin = () => {
    return (
        <>
            <div className="row mt-3">
            <ul>
                <li><Link to={"/auth"}> Iniciar Sesión</Link></li>
            </ul>
        </div>
        </>
    )
}

export default LinkLogin
