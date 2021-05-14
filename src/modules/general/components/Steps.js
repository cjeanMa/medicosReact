import React, { useState } from 'react'
import { Card, CardTitle, Carousel, Col, Container, Row, Tab, Tabs } from 'react-materialize'
import '../css/steps.css'
import CardSteps from './CardSteps'

const Steps = () => {

    return (
        <section>
            <Container>
                <h2 className="subtitle">Pasos para reservar cita</h2>
                <Row>
                    <Tabs
                        className="tab-demo z-depth-2 blue darken-1"
                        options={{
                            swipeable: true
                        }}
                    >

                        <Tab
                            active
                            className="green lighten-3 item-step"
                            options={{
                                duration: 1500,
                                onShow: null,
                                responsiveThreshold: Infinity,
                                swipeable: false
                            }}
                            title="PASO 1"
                        >
                            <Row className="item-step">
                                <Col s={12} m={12} l={6} xl={6} className="content_item_step">
                                    <div className="body_item_step">
                                        <h4 className="title_item_step">Seleccionar Un especialista</h4>
                                        <p className="description_item_step">En el apartado de especialistas seleccionamos uno</p>
                                    </div>
                                </Col>
                                <Col s={12} m={12} l={6} xl={6} className="img_item_step">
                                    <img src="https://via.placeholder.com/400/400" alt="" />
                                </Col>
                            </Row>
                        </Tab>

                        <Tab
                            active
                            className="blue lighten-3 item-step"
                            options={{
                                duration: 1500,
                                onShow: null,
                                responsiveThreshold: Infinity,
                                swipeable: false
                            }}
                            title="PASO 2"
                        >
                            <Row className="item-step">
                                <Col s={12} m={12} l={6} xl={6} className="content_item_step">
                                    <div className="body_item_step">
                                        <h4 className="title_item_step">Seleccionar Un especialista</h4>
                                        <p className="description_item_step">En el apartado de especialistas seleccionamos uno</p>
                                    </div>
                                </Col>
                                <Col s={12} m={12} l={6} xl={6} className="img_item_step">
                                    <img src="https://via.placeholder.com/400/400" alt="" />
                                </Col>
                            </Row>
                        </Tab>

                        <Tab
                            active
                            className="green lighten-3 item-step"
                            options={{
                                duration: 1500,
                                onShow: null,
                                responsiveThreshold: Infinity,
                                swipeable: false
                            }}
                            title="PASO 3"
                        >
                            <Row className="item-step">
                                <Col s={12} m={12} l={6} xl={6} className="content_item_step">
                                    <div className="body_item_step">
                                        <h4 className="title_item_step">Seleccionar Un especialista</h4>
                                        <p className="description_item_step">En el apartado de especialistas seleccionamos uno</p>
                                    </div>
                                </Col>
                                <Col s={12} m={12} l={6} xl={6} className="img_item_step">
                                    <img src="https://via.placeholder.com/400/400" alt="" />
                                </Col>
                            </Row>
                        </Tab>

                        <Tab
                            active
                            className="blue lighten-3 item-step"
                            options={{
                                duration: 1500,
                                onShow: null,
                                responsiveThreshold: Infinity,
                                swipeable: false
                            }}
                            title="PASO 4"
                        >
                            <Row className="item-step">
                                <Col s={12} m={12} l={6} xl={6} className="content_item_step">
                                    <div className="body_item_step">
                                        <h4 className="title_item_step">Seleccionar Un especialista</h4>
                                        <p className="description_item_step">En el apartado de especialistas seleccionamos uno</p>
                                    </div>
                                </Col>
                                <Col s={12} m={12} l={6} xl={6} className="img_item_step">
                                    <img src="https://via.placeholder.com/400/400" alt="" />
                                </Col>
                            </Row>
                        </Tab>

                    </Tabs>

                </Row>
            </Container>
        </section>
    )
}

export default Steps
