import React from 'react'
import about from "./images/about.jpg"

const LandingAbout = () => {
    return (
        <section className="container-fluid" id="nosotros">
        <div className="row about">
            <div className="col-md-2 col-sm-0"></div>
            <div className="description col-sm-12 col-md-4">
                <h3 className="title">CERCA DE TI</h3>
                <ul className="nav mini-menu" id="myTab" role="tablist">
                    <li className="nav-item">
                        <a className="nav-link link active" id="home-tab" data-toggle="tab" href="#home" role="tab"
                            aria-controls="home" aria-selected="true">NOSOTROS</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link link" id="profile-tab" data-toggle="tab" href="#profile" role="tab"
                            aria-controls="profile" aria-selected="false">SERVICIOS</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link link" id="contact-tab" data-toggle="tab" href="#contact" role="tab"
                            aria-controls="contact" aria-selected="false">NUESTRA MISION</a>
                    </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                        <div className="content-mini-menu">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime doloremque atque
                                saepe magnam
                                excepturi sed non sunt ex quasi? Rerum, voluptatibus quo provident suscipit
                                reiciendis iste
                                dolorem
                                voluptate accusamus quisquam.</p>
                            <div className="enlaces-mini-menu">
                                <a href="#" className="btn__secondary">Mas Informacion</a>
                                <a href="#" className="btn__main">Solicitar servicios</a>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                        <div className="content-mini-menu">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime doloremque atque
                                saepe magnam
                                excepturi sed non sunt ex quasi? Rerum, voluptatibus quo provident suscipit
                                reiciendis iste
                                dolorem
                                voluptate accusamus quisquam.</p>
                            <div className="enlaces-mini-menu">
                                <a href="#" className="btn">Mas Info</a>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                        <div className="content-mini-menu">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime doloremque atque
                                saepe magnam
                                excepturi sed non sunt ex quasi? Rerum, voluptatibus quo provident suscipit
                                reiciendis iste
                                dolorem
                                voluptate accusamus quisquam.</p>
                            <div className="enlaces-mini-menu">
                                <a href="#" className="btn">Mas Info</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="img-about col-sm-12 col-md-6">
                <img src={about} alt={"ban1"}/>
            </div>
        </div>
    </section>
    )
}

export default LandingAbout
