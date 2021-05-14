import React from 'react'
import "../css/opinionesEspecialistas.css"
import OpinionPacienteEspecialista from './OpinionPacienteEspecialista'

const OpinionesEspecialistas = () => {
    return (
        <div className="card card_opiniones">
            <div className="row">
                <div className="col s12">
                    <h5>Opiniones de Pacientes</h5>
                    <div className="separador" />
                    <OpinionPacienteEspecialista></OpinionPacienteEspecialista>
                    <OpinionPacienteEspecialista></OpinionPacienteEspecialista>
                    <OpinionPacienteEspecialista></OpinionPacienteEspecialista>
                    <OpinionPacienteEspecialista></OpinionPacienteEspecialista>
                    <OpinionPacienteEspecialista></OpinionPacienteEspecialista>
                </div>
            </div>
        </div>
    )
}

export default OpinionesEspecialistas
