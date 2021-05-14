import React from 'react'
import { Col, Row, Tab } from 'react-materialize'

const CardSteps = () => {
    return (
        <Tab
            active
            className="green lighten-3 item-step"
            options={{
                duration: 1500,
                onShow: null,
                responsiveThreshold: Infinity,
                swipeable: false
            }}
            title="hola"
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
    )
}

export default CardSteps
