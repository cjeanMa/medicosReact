import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import AuthFooter from '../components/AuthFooter'
import LinkLogin from '../components/LinkLogin'
import "../styles/general.css"

const AuthRegisterPacient = () => {

    const [form, setForm] = useState({});

    const msgPassword = document.getElementById("msgPassword");

    const handleInput = (e) => {
        setForm({
            ...form,
            [e.target.name] : e.target.value
        })
        console.log(form);
    }

    const handleSubmit = (e) => {
        alert("");
    }

    const handleConfirm = (e) => {
        if(e.target.value == form.password){
            msgPassword.className = "span-form text-success";
            msgPassword.innrHTML = "Coincide con la contraseña";
        }
        else{
            msgPassword.className = "span-form text-danger";
            msgPassword.innrHTML = "No coincide con la contraseña";
        }
        console.log(e.target.value);
    }

    return (
        <>
            <div className="container-fluid maxheight bg-login">
                <div className="row maxheight align-items-center">
                    <div className="container">
                        <Link to={"/"}>Pagina Principal</Link>
                        <div className="row justify-content-center">
                            <div className="card shadow col-4 col-sm-10 col-md-6 col-lg-4">
                                <div className="card-body">
                                    <h5 className="card-title my-4 text-center">REGISTRO - PACIENTE</h5>
                                    <form className="group-form">
                                        <input type="text" name="nombre" className="form-control" value={form.nombre} onChange={handleInput} placeholder="nombre" />
                                        <br />
                                        <input type="text" name="usuario" className="form-control" value={form.usuario} onChange={handleInput} placeholder="usuario" />
                                        <br />
                                        <input type="password" name="password" className="form-control" value={form.password} onChange={handleInput} placeholder="constraseña" />
                                        <br />
                                        <input type="password" name="confirmPassword" className="form-control" onChange={handleConfirm} placeholder="Confirmar constraseña" />
                                        <span id="msgPassword" className="span-form"></span>
                                        <br />
                                        <button className="btn btn-primary btn-block"> Aceptar </button>
                                    </form>
                                    <LinkLogin />
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

export default AuthRegisterPacient
