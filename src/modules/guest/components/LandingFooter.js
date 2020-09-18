import React from 'react'
import logo from "./images/logo.png"

const LandingFooter = () => {
    return (
        <footer>
            <div className="container-fluid bg-secondary">
                <div className="container foot pt-5">
                    <div className="row text-white">
                        <div className="col-md-3 p-2 info-footer">
                            <img src={logo} alt="logo" />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus iusto corporis illum
                            eligendi maiores est cum quos sint illo magni</p>
                        </div>
                        <div className="col-md-3 enlaces-footer">
                            <h5>Enlaces</h5>
                            <ul>
                                <li><a href="" className="link-footer">Nosotros</a></li>
                                <li><a href="" className="link-footer">Servicios</a></li>
                                <li><a href="" className="link-footer">Portafolio</a></li>
                                <li><a href="" className="link-footer">Contactanos</a></li>
                                <li><a href="" className="link-footer">Noticias</a></li>
                                <li><a href="" className="link-footer">Mas</a></li>
                            </ul>
                        </div>
                        <div className="col-md-3 enlaces-footer">
                            <h5>Siguenos en:</h5>
                            <ul>
                                <li><a href="" className="link-footer">Facebook</a></li>
                                <li><a href="" className="link-footer">Twitter</a></li>
                                <li><a href="" className="link-footer">Youtube</a></li>
                                <li><a href="" className="link-footer">Tiktok</a></li>
                                <li><a href="" className="link-footer">Google+</a></li>
                                <li><a href="" className="link-footer">Mas</a></li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <h5>Suscribete</h5>
                            <span>Para recibir mas noticias, mandamos noticias semanalmente</span>
                            <input type="text" className="form-control" placeholder="Correo Electronico" />
                            <button className="btn-block btn__secondary"> Suscribirse </button>
                        </div>
                    </div>
                </div>
                <div className="row derechos bg-dark text-white">
                    <div className="container">
                        <div className="row py-4">
                            <span>Todos Los Derechos Reservados 2020</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default LandingFooter
