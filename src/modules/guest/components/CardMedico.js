import React from 'react'
import { Link } from 'react-router-dom';
import Especialidades from './Especialidades'

const CardMedico = (props) => {
    console.log("card", props.medico);
    console.log("esp", props.esp);
    return (
        //<Link to={`/medicos/${props.medico.id}`}>
        <div className="card shadow m-2 col-lg-4 col-md-6 col-sm-12" style={{"max-width":"350px"}}>
    
        <div className="row no-gutters text-center">
          <div className="col-md-4">
            <img className="card-img-top" src={props.medico.imagen} alt="" />
            <div className="text-center">
            <i className="fa fa-star checked"></i>
            <i className="fa fa-star checked"></i>
            <i className="fa fa-star checked"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            </div>
            <small>(10 reseñas)</small>
            </div>
            <i className="fa fa-heart fav"></i>
          <div className="col-md-6">
          <div className="card-body">
          <h5 className="card-title">{props.medico.nombre}</h5>
            {props.esp.map((auxEsp) => {
              if (auxEsp.id == props.medico.especialidad) {
                return <p className="card-text">{auxEsp.nombre}</p>;
              }
            })}

            {props.distritos.map((dist) => {
              if (dist.id == props.medico.distrito)
                return <p className="card-text">{dist.nombre}</p>;
            })}
            <p className="card-text">{props.medico.direccion} <i className="fa fa-map-marker gps" /></p>
            
          </div>
            
          </div>
        </div>
      
    </div>
    //</Link>
    )
}

export default CardMedico
