import React from 'react'
import { Link } from 'react-router-dom'
import '../css/profesionals.css'

const CardOpinion = ({opinion}) => {
    return (
        <div>
            <img src={opinion.foto} className="img_opinion" />
            <h4 className="name_opinion"> {opinion.nombre}</h4>
            <p className="description_opinion">{opinion.comentario}<Link to="/">Ver Mas...</Link> </p>
        </div>
    )
}

export default CardOpinion
