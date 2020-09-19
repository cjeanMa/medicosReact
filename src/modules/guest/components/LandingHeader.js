import React from 'react'
import { Link } from 'react-router-dom'
import logo from "./images/logo.png"

const LandingHeader = () => {
    return (
        <header className="container-fluid bg-header">
            <section className="container">
                <div className="row py-4">
                    <div className="col-sm-12 col-md-3">
                        <Link to={"/"}><img src={logo} className="logo" alt="logo"/></Link>
                </div>
                        <div className="nav col-sm-12 col-md-9">
                            <ul>
                                <li><Link to={"/medicos"} className="link"> MEDICOS </Link> </li>
                                <li><Link to={"nosotros"} className="link"> NOSOTROS </Link> </li>
                                <li><Link to={"servicios"} className="link"> SERVICIOS </Link></li>
                                <li><Link to={"portafolio"} className="link"> PORTAFOLIO </Link></li>
                                <li><Link to={"contactanos"} className="link"> CONTACT US </Link></li>
                                <li><Link to={"./auth"} className="link"> LOGIN </Link></li>
                            </ul>
                        </div>
                    </div>

        </section>
    </header>
    )
}

export default LandingHeader
