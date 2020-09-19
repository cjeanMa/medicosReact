import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import "../styles/general.css"
import logo from '../img/hospital.png'
import AuthNav from '../components/AuthNav'
import AuthFooter from '../components/AuthFooter'
import { Link } from 'react-router-dom'

const AuthLogin = () => {

    const [form, setForm] = useState({
        usuario: "",
        password: ""
    })

    const msgLogeo = document.getElementById("msgLogeo");
    console.log(msgLogeo);

    const handleInput = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
        console.log(form);
    }

    const handleSubmit = (e) => {
        //e.preventDefault();
        if (form.usuario == "medico" && form.password == "medico") {
            //<Redirect to={'/admin/dashboard'}/>
            window.location.href = "/admin";
        }
        else {
            msgLogeo.className = "alert alert-danger span-form text-danger";
            msgLogeo.innerHTML = "El nombre de usuario o password son incorrectos";
            setForm({
                usuario: "",
                password: ""
            });
        }
    }

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
                                        <input type="text" name="usuario" className="form-control" value={form.usuario} onChange={handleInput} placeholder="usuario" />
                                        <br />
                                        <input type="password" name="password" className="form-control" value={form.password} onChange={handleInput} placeholder="constraseña" />
                                        <br />
                                        <div className="w-100" id="msgLogeo">
                                        </div>
                                        <button className="btn btn-primary btn-block" onClick={handleSubmit}> Aceptar </button>
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
