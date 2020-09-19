import React from 'react'
import Especialidades from './Especialidades'

const CardMedico = (props) => {
    console.log("card", props.medico);
    console.log("esp", props.esp);
    return (
        <div className="card shadow col-md-3 col-sm-12 m-2">
            
            <div className="card-body">
                <img className="card-img-top" src={props.medico.imagen} alt=""/>
                <h5 className="card-title">{props.medico.nombre}</h5>
                {props.esp.map((auxEsp)=>{
                    if(auxEsp.id == props.medico.especialidad){
                        return (
                        <p className="card-text">{auxEsp.nombre}</p>
                        )
                    }
                })}

                {props.distritos.map(dist=>{
                    if(dist.id==props.medico.distrito)
                        return(<p className="card-text">{dist.nombre}</p>)
                })}
                <p className="card-text">{props.medico.direccion}</p>
            </div>
        </div>
    )
}

export default CardMedico
