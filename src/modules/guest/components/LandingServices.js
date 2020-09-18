import React from 'react'
import serv1 from "./images/services-1.png"
import serv2 from "./images/services-2.png"
import serv3 from "./images/services-3.png"

const LandingServices = () => {
    return (
        <section className="container-fluid py-5" id="servicios">
            <div className="container">
                <div className="row">
                    <h3 className="title">NUESTROS SERVICIOS</h3>
                    <div className=" container-fluid flex-card">
                        <div className="own-card shadow">
                            <div className="img-block">
                                <img src={serv1} alt=""/>
                            </div>
                            <h4 className="title-card">Consultas</h4>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident qui ratione a,
                                accusamus
                                quia
                                nesciunt quos cumque nulla repellendus doloribus id eius saepe sunt necessitatibus
                            </p>
                        </div>
                        <div className="own-card shadow">
                            <div className="img-block">
                                <img src={serv2} alt=""/>
                            </div>
                            <h4 className="title-card">Visitas Medicas</h4>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident qui ratione a,
                                accusamus
                                quia
                                nesciunt quos cumque nulla repellendus doloribus id eius saepe sunt necessitatibus
                            </p>
                        </div>
                        <div className="own-card shadow">
                            <div className="img-block">
                                <img src={serv3} alt=""/>
                            </div>
                            <h4 className="title-card">Operaciones</h4>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident qui ratione a,
                                accusamus
                                quia
                                nesciunt quos cumque nulla repellendus doloribus id eius saepe sunt necessitatibus
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LandingServices
