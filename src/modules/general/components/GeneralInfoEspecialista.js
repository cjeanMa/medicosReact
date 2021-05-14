import { faCheck, faCheckCircle, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import "../css/generalInfoEspecialista.css"

const GeneralInfoEspecialista = ({ esp }) => {
    return (
        <div className="card card_general_info">
            <div className="row">
                <div className="col">
                    <h5>Datos Generales</h5>
                    <hr />
                    <p className="item_general_info">
                        <span> Ciudad Donde Radica: </span>
                        Ayacucho - Ayacucho {esp.distrito}
                    </p>
                    <p className="item_general_info">
                        <span>Direccion de consultorio: </span>
                        {esp.direccion}
                    </p>
                    <p className="item_general_info">
                        <span>Metodos de Pago: </span>
                        Pago en Efectivo, Transaccion Bancaria
                    </p>
                    <p className="item_general_info">
                        <span>Numero de Celular: </span>
                        {esp.celular}
                    </p>
                    <p className="item_general_info">
                        <span>Costo de Consulta: </span>
                        desde S/. 100
                    </p>
                </div>
                <div className="col">
                    <h5>Enfermedades Tratadas</h5>
                    <hr/>
                    <ul>
                        <li><FontAwesomeIcon className="blue-text darken-1" icon={faCheckCircle}/> Gripe</li>
                        <li><FontAwesomeIcon className="blue-text darken-1" icon={faCheckCircle}/> Tratamiento del corazon</li>
                        <li><FontAwesomeIcon className="blue-text darken-1" icon={faCheckCircle}/> Operaciones a corazon abierto</li>
                        <li><FontAwesomeIcon className="blue-text darken-1" icon={faCheckCircle}/> Gastritis</li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default GeneralInfoEspecialista
