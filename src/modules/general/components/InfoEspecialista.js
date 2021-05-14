import React, { useState, useEffect } from 'react'
import { getEspecialista } from '../../../services/especialistas'
import AditionalInfoEspecialista from './AditionalInfoEspecialista';
import BasicInfoEspecialista from './BasicInfoEspecialista';
import MapEspecialista from './MapEspecialista';


const InfoEspecialista = ({ esp }) => {

    const [especialista, setEspecialista] = useState([]);

    useEffect(() => {
        getEspecialista(esp).then(rpta => {
            console.log(rpta);
            setEspecialista(rpta);
        }
        )

    }, [])

    return (
        <div className="container">
            <div className="row">
                <div className="col s12 m12 l9">
                    <BasicInfoEspecialista especialista={especialista}></BasicInfoEspecialista>
                    <AditionalInfoEspecialista esp = {especialista}/>
                </div>
                <div className="col s12 m12 l3">

                    <div className="card">
                    <MapEspecialista></MapEspecialista>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default InfoEspecialista
