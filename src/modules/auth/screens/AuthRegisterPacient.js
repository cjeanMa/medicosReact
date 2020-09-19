import React from 'react'
import { Link } from 'react-router-dom'
import AuthFooter from '../components/AuthFooter'
import LinkLogin from '../components/LinkLogin'
import "../styles/general.css"

const AuthRegisterPacient = () => {
    return (
        <>
            <div className="container-fluid maxheight bg-login">
                <div className="row maxheight align-items-center">
                    <div className="container">
                        <Link to={"/"}>Pagina Principal</Link>
                        <div className="row justify-content-center">
                            <div className="card shadow col-4">
                                <div class="card-body">
                                    <h5 class="card-title my-4 text-center">REGISTRO - PACIENTE</h5>
                                    <form class="group-form">
                                        <input type="text" className="form-control" placeholder="usuario" />
                                        <br />
                                        <input type="password" className="form-control" placeholder="constraseña" />
                                        <br />
                                        <button className="btn btn-primary btn-block"> Aceptar </button>
                                    </form>
                                    <LinkLogin/>
                                </div>
                                <AuthFooter/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AuthRegisterPacient
