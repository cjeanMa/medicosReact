import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt, faHospitalUser, faHeart } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { Link } from 'react-router-dom'
import '../css/cardEspecialista.css'

const CardEspecialista = ({ esp }) => {

    return (
        <div className="card_especialista">
            <span className="favorite"><FontAwesomeIcon icon={faHeart}/> </span>
            <div className="row">
                <div className="col s12 m12 l5 img_especialista">
                    <img src={esp.imagen} alt="nothing" />
                </div>
                <div className=" col s12 m12 l7 info_especialista">
                    <p className="nombre_especialista blue-text text-darken-3">
                        {esp.nombre}
                    </p>
                    <p className="esp_especialista">
                        {esp.especialidad}
                    </p>
                    <p className="distrito_especialista">
                        {esp.distrito}
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col  s12 m12 l12 disponibilidad_especialista">
                    <p> Proxima fecha de disponibilidad: 12 Mayo</p>
                </div>
            </div>
            <div className="row">
                <div className="col s6 m6 l6">
                    <button class="btn btn-small blue"><FontAwesomeIcon icon={faCalendarAlt} /> Fechas </button>
                </div>
                <div className="col s6 m6 l6">
                    <Link to={`/especialista/${esp.id}`} className="btn btn-small green lighten-3"><FontAwesomeIcon icon={faHospitalUser} /> Ver Perfil</Link>
                </div>
            </div>


        </div>
    )
}

export default CardEspecialista
