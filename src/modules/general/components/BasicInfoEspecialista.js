import { faStar, faStarHalf, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import "../css/basicInfoEspecialista.css"

const BasicInfoEspecialista = ({ especialista }) => {

    return (
        <div className="card card_basic_info">
            <div className="row">
                <div className="col s12 m4">
                    <div className="img_basic_info">
                        <img src={especialista.imagen} alt="" />
                    </div>
                </div>
                <div className="col s12 m8">
                    <div className="content_basic_info">
                        <p className="name_basic_info">
                            {"Dr."} {especialista.nombre}
                        </p>
                        <p className="esp_basic_info">
                            {especialista.especialidad}
                        </p>
                        <p className="colegiatura_basic_info">
                            <span>Num. Colegiatura: </span> 0123123
                        </p>
                        <p className="resenia_basic_info">
                            <span>Reseñas: </span>
                            <span className="yellow-text text-darken-3">  
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            
                            </span> <span>15 <Link to="#"> Opiniones</Link> </span> 
                        </p>
                    </div>

                </div>
            </div>


        </div>
    )
}

export default BasicInfoEspecialista
