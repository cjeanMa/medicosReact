import React from 'react'
import Especialidades from './Especialidades'

const CardMedico = (props) => {
    return (
        <div className="card shadow col-md-3 col-sm-12 m-2">
            
            <div className="card-body">
                <img className="card-img-top" src={props.medico.imagen} alt=""/>
                <h5 className="card-title">{props.medico.nombre}</h5>
                <p className="card-text">{props.esp.nombre}</p>
                <p className="card-text">{props.medico.lugar}</p>
            </div>
        </div>
    )
}

export default CardMedico
