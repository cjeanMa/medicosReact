import React from 'react'
import { Col, Container, Row } from 'react-materialize'
import { Link } from 'react-router-dom'
import '../css/banner.css'
import banner from "../img/doc-banner.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Banner = () => {

    return (
        <Container className="section">
            <Row className="banner_section">
                <Col s={12} m={12} l={6} xl={6}>
                    <div className="img_banner">
                        <img src={banner} alt="" className="responsive-img" />
                    </div>
                </Col>
                <Col className="info_banner" s={12} m={12} l={6} xl={6}>
                    <p className="title_banner"> Encuentra a los mejores medicos y especialistas de la salud</p>
                    <p className="content_banner grey-text">Reserva una consulta en línea y recibe ayuda sin tener que salir a ningún sitio. Recibirás el mismo diagnóstico acertado sin salir de casa.</p>
                    <Link to="/especialistas" className="btn btn_banner">Buscar Especialista <FontAwesomeIcon icon={faSearch} /></Link>
                </Col>

            </Row>
        </Container>

    )
}

export default Banner
