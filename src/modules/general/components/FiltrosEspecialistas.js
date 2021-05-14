import React, { useState, useEffect } from 'react'
import {getDistritos} from '../../../services/distritos'
import '../css/filtrosEspecialistas.css'

const FiltrosEspecialistas = () => {
    
    const [distritos, setDistritos] = useState([]);

    useEffect(()=>{
        getDistritos().then(rpta=>{
            console.log(rpta);
            setDistritos(rpta);
        })
    }, [])

    return (
        <div className="grey lighten-4 box_filters z-depth-2">
            {distritos.map((distrito)=>{
                return (
                <button key={distrito.id} className="btn btn-small blue">{distrito.nombre}</button>
                );
            })

            }
        </div>
    )
}

export default FiltrosEspecialistas
