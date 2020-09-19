import React, { useState, useEffect } from 'react'
import { getMedicos } from '../../../services/Medicos'
import { getEspecialidades } from '../../../services/Especialidades'
import { getDistritos } from '../../../services/Distritos'

const InformacionMedico = () => {

    const [medicos, setMedicos] = useState([]);
    const [especialidades, setEspecialidades] = useState([]);
    const [distritos, setDistritos] = useState([]);

    useEffect(() => {
        getMedicos().then(rpta => {
            setMedicos(rpta);
        });
        getEspecialidades().then(rpta => {
            setEspecialidades(rpta);
        });
        getDistritos().then(rpta => {
            setDistritos(rpta);
        });
    })


    return (
        <div className="container">
            <h3>Relacion de Medicos</h3>
            <table className="table">
                <thead className="thead-light">
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Nombre Completo</th>
                        <th scope="col">Especialidad</th>
                        <th scope="col">Distrito</th>
                    </tr>
                </thead>
                <tbody>
                    {medicos.map(medico => {
                        return (
                            <tr>
                                <th scope="row">{medico.id}</th>
                                <td>{medico.nombre}</td>
                                <td>{especialidades.map(esp=>{
                                    if(esp.id == medico.especialidad)
                                        return esp.nombre
                                })}</td>
                                <td>{distritos.map(dist=>{
                                    if(dist.id == medico.distrito)
                                        return dist.nombre
                                })}</td>
                            </tr>
                        )
                    })}


                </tbody>
            </table>


        </div>
    )
}

export default InformacionMedico
