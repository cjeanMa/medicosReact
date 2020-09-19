import React from 'react'
import "../styles/general.css"
import logo from '../img/hospital.png'
import AuthNav from '../components/AuthNav'
import AuthFooter from '../components/AuthFooter'
import { Link } from 'react-router-dom'

const AuthLogin = () => {
    return (
        <>
            <div className="container-fluid maxheight bg-login">
                <div className="row maxheight align-items-center">
                    <div className="container">
                        <Link to={"/"}>Pagina Principal</Link>
                        <div className="row justify-content-center">
                            <div className="card shadow col-10 col-sm-10 col-md-6 col-lg-5 col-xl-4">
                                <div class="card-body">
                                    <img class="card-img-top logo-login" src={logo} alt="Card image cap" />
                                    <h5 class="card-title my-4 text-center">INICIAR SESION</h5>
                                    <form class="group-form">
                                        <input type="text" className="form-control" placeholder="usuario" />
                                        <br />
                                        <input type="password" className="form-control" placeholder="constraseña" />
                                        <br />
                                        <button className="btn btn-primary btn-block"> Aceptar </button>
                                    </form>
                                    <AuthNav />
                                </div>
                                <AuthFooter />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default AuthLogin
