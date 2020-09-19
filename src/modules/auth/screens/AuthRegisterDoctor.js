import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import AuthFooter from '../components/AuthFooter'
import AuthNav from '../components/AuthNav'
import LinkLogin from '../components/LinkLogin'
import { getEspecialidades } from "../../../services/Especialidades"
import { getDistritos } from "../../../services/Distritos"
import { postMedico } from "../../../services/Medicos"
import "../styles/general.css"

const AuthRegisterDoctor = () => {

    /* Estados para verificar los campos de usuario y confirmPassword */
    const [verUsuario, setVerUsuario] = useState(true);
    const [verPassword, setVerPassword] = useState(false);
    /* Estado para manejar los datos del formulario */

    const [especialidades, setEspecialidades] = useState([]);
    const [distritos, setDistritos] = useState([]);

    const [form, setForm] = useState({
        nombre: "",
        especialidad: "",
        direccion: "",
        distrito: "",
        celular: "",
        email: "",
        usuario: "",
        password: "",
    })

    /* Para manejar los mensajes del campo de usuario y confirmPassword */
    const msjUsuario = document.getElementById('msjUsuario');
    const msjPassword = document.getElementById('msjPassword');


    useEffect(() => {
        getEspecialidades().then((rpta)=>{
            setEspecialidades(rpta)
        });
        getDistritos().then((rpta)=>{
            setDistritos(rpta)
        })

    }, [])

    const handleInput = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
        console.log(form);
    };

    const { nombre, especialidad, direccion, distrito, celular, email, usuario, password } = form;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (
            nombre.trim() !== "" &&
            especialidad.trim() !== "" &&
            direccion.trim() !== "" &&
            distrito.trim() !== "" &&
            celular.trim() !== "" && 
            email.trim() !== "" &&
            usuario.trim() !== "" &&
            verPassword
        ){
            const objMedico ={
                ...form,
                imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRRax5Ud9e2gqIl3CeCYunrrNQVWfbvlcqpNQ&usqp=CAU"
            }
            postMedico()
        }

        /* postMedico(form) */
    }

    const verificarPassword = (e) => {
        if (e.target.value == form.password) {
            msjPassword.className = "span-form text-success";
            msjPassword.innerHTML = "Coincide con password";
            setVerPassword(true);
        }
        else {
            msjPassword.className = "span-form text-danger";
            msjPassword.innerHTML = "No coincide con password";
            setVerPassword(false);
        }
    }
    return (
        <>
            <div className="container-fluid maxheight bg-login">
                <div className="row maxheight align-items-center">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="card shadow col-10 col-sm-10 col-md-10 col-lg-8 col-xl-8">
                                <Link to={"/"} >Pagina Principal</Link>
                                <div class="card-body">
                                    <h5 class="card-title my-4 text-center">REGISTRO - MEDICO</h5>
                                    <form class="row group-form">
                                        <div className="col-12 col-md-6">
                                            <label htmlFor="nombre">Nombre y Apellidos: </label>
                                            <input type="text" name="nombre" className="form-control" value={form.nombre} onChange={handleInput} placeholder="Nombre y Apellidos" />
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <label htmlFor="especialidad">Especialidad: </label>
                                            <select name="especialidad" id="especialidad" value={form.especialidad} onChange={handleInput} className="form-control">
                                                <option value="">--Seleccione--</option>
                                                {especialidades.map(esp=>{
                                                        return(<option value={esp.id}>{esp.nombre}</option>)
                                                    })

                                                    }
                                            </select>
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <label htmlFor="direccion">Direccion: </label>
                                            <input type="text" name="direccion" className="form-control" value={form.direccion} onChange={handleInput} placeholder="Direccion (Consultorio)" />
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <label htmlFor="distrito">Distrito: </label>
                                            <select name="distrito" className="form-control" value={form.distrito} onChange={handleInput}>
                                                    <option value="">--Seleccione--</option>
                                                    {distritos.map(dis=>{
                                                        return(<option value={dis.id}>{dis.nombre}</option>)
                                                    })

                                                    }
                                            </select>
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <label htmlFor="celular">Celular: </label>
                                            <input type="tel" name="celular" className="form-control" value={form.celular} onChange={handleInput} placeholder="Numero Celular" />
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <label htmlFor="email">Correo Electronico: </label>
                                            <input type="email" name="email" className="form-control" value={form.email} onChange={handleInput} placeholder="Correo Electronico" />
                                        </div>

                                        <div className="col-12 col-md-4">
                                            <label htmlFor="usuario">Nombre de Usuario: </label>
                                            <input type="tel" name="usuario" className="form-control" value={form.usuario} onChange={handleInput} placeholder="Usuario" />
                                            <span className="span-form text-danger" id="msjUsuario" ></span>
                                        </div>
                                        <div className="col-12 col-md-4">
                                            <label htmlFor="password">Contraseña: </label>
                                            <input type="password" name="password" className="form-control" value={form.password} onChange={handleInput} placeholder="Correo Electronico" />
                                        </div>
                                        <div className="col-12 col-md-4">
                                            <label htmlFor="confirmPassword">Confirme Contraseña: </label>
                                            <input type="password" name="confirmPassword" className="form-control" onChange={verificarPassword} placeholder="Correo Electronico" />
                                            <span className="span-form" id="msjPassword" ></span>
                                        </div>
                                        <div className="col-12">
                                            <button className="btn btn-success btn-block mt-4" onClick={handleSubmit}> REGISTRARME </button>
                                        </div>

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

export default AuthRegisterDoctor
