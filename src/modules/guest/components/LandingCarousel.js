import React from 'react'
import ban1 from "./images/ban-1.jpg"
import ban2 from "./images/ban-2.jpg"

const LandingCarousel = () => {
    return (
        <section className="container-fluid">
            <div id="carouselExampleIndicators" className="carousel slide row" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                </ol>
                <div className="carousel-inner carrousel">
                    <div className="carousel-item banner active">
                        <img className="d-block" src={ban2} alt="First slide"/>
                        <div className="note__banner">
                            <div className="content__note">
                                <p>Porque ante esta pandemia todos estamos juntos, para combatirla
                                </p>
                                <h2>Medicos de distintas áreas</h2>
                                <div className="links__note">
                                    <a href="#" className="btn__secondary">Mas Informacion</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item banner">
                        <img className="d-block w-100" src={ban1} alt="Second slide"/>
                        <div className="note__banner">
                            <div className="content__note">
                                <p>Aqui podras encontrar a los medicos mas cerca de tu casa
                                </p>
                                <h2>Estamos en todo el Perú</h2>
                                <div className="links__note">
                                    <a href="#" className="btn__secondary">Ver Ofertas</a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default LandingCarousel
