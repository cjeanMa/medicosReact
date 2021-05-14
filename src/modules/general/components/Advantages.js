import React from 'react'
import { Card, Col, Container, Row, } from 'react-materialize'
import '../css/advantages.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faHeartbeat, faPencilAlt, faPlusSquare, faUserMd } from '@fortawesome/free-solid-svg-icons'

const Advantages = () => {
    return (
        <section className="section">
            <Container>
                <Row>
                    <h2 className="subtitle">¿Por qué buscar medicos por DoctorApp?</h2>
                    <Col className="item_advantage"  s={12} m={6} l={6} xl={6}>
                        <div className="item_advantage_icon">
                            <FontAwesomeIcon className="icon_item" icon={faPencilAlt} />
                        </div>
                        <div className="body_item_advantage">
                            <p className="content_item_advantage">Encuentra al mejor especialista de la salud cercano
                            a tu zona</p>
                        </div>

                    </Col>
                    <Col className="item_advantage" s={12} m={6} l={6} xl={6}>
                        <div className="item_advantage_icon">
                            <FontAwesomeIcon className="icon_item" icon={faUserMd} />
                        </div>
                        <div className="body_item_advantage">
                            <p className="content_item_advantage">Conoce, califica y reseña a tu especialista</p>
                        </div>

                    </Col>
                    <Col className="item_advantage" s={12} m={6} l={6} xl={6}>
                        <div className="item_advantage_icon">
                            <FontAwesomeIcon className="icon_item" icon={faCalendar} />
                        </div>
                        <div className="body_item_advantage">
                            <p className="content_item_advantage">Agenda una cita y evita colas</p>
                        </div>

                    </Col>
                    <Col className="item_advantage" s={12} m={6} l={6} xl={6}>
                        <div className="item_advantage_icon">
                            <FontAwesomeIcon className="icon_item" icon={faHeartbeat} />
                        </div>
                        <div className="body_item_advantage">
                            <p className="content_item_advantage">Obten un historial de tus consultas</p>
                        </div>

                    </Col>
                    <Col className="item_advantage" s={12} m={6} l={6} xl={6}>
                        <div className="item_advantage_icon">
                            <FontAwesomeIcon className="icon_item" icon={faPlusSquare} />
                        </div>
                        <div className="body_item_advantage">
                            <p className="content_item_advantage">Obten un historial y alarma de medicacion</p>
                        </div>

                    </Col>
                </Row>
            </Container>

        </section>
    )
}

export default Advantages
