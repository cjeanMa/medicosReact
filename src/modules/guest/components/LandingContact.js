import React from 'react'

const LandingContact = () => {
    return (
        <section className="container-fluid py-5 bg-light" id="contactanos">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-sm-12 pr-5 border-right">
                        <h3 className="title">Contactanos</h3>
                        <form className="row group-form">
                            <div className="row">
                                <div className="mb-4 col-md-6 col-sm-12">
                                    <input type="text" name="nombre" className="form-control input-contact"
                                        placeholder="Nombre"/>
                                </div>
                                <div className="mb-4 col-md-6 col-sm-12">
                                    <input type="tel" name="celular" className="form-control input-contact"
                                        placeholder="Celular"/>
                                </div>
                                <div className="mb-4 col-md-6 col-sm-12">
                                    <input type="email" name="email" className="form-control input-contact"
                                        placeholder="Correo Electronico"/>
                                </div>
                                <div className="mb-4 col-md-6 col-sm-12">
                                    <input type="text" name="motivo" className="form-control input-contact"
                                        placeholder="Motivo"/>
                                </div>
                                <div className="mb-4 col-12">
                                    <textarea name="mensaje" id="" cols="30" rows="10"
                                        className="form-control input-contact" placeholder="Mensaje"></textarea>
                                </div>
                                <div className="mb-4 col-12 text-right">
                                    <button className="btn__secondary">Enviar</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="info-contact col-md-4 col-sm-12 pl-5">
                        <div>
                            <h5>PHONE</h5>
                            <span>912-123123</span>
                            <span>912-123123</span>
                        </div>
                        <div>
                            <h5>E-MAIL</h5>
                            <span>lorem@gmail.com</span>
                            <span>lorem@gmail.com</span>
                        </div>
                        <div>
                            <h5>ADDRESS</h5>
                            <span>Av. Los Medicos 1231 - Puno</span>
                            <span>Av. Los Medicos 1231 - Arequipa</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LandingContact
