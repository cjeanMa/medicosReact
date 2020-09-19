import React, { useState, useEffect } from 'react'
import CardMedico from './CardMedico';
import Especialidades from './Especialidades';
import {getEspecialidades} from '../../../services/Especialidades';
import {getMedicos} from '../../../services/Medicos';
import {getDistritos} from '../../../services/Distritos';
import Distritos from './Distritos';

const Medicos = () => {

    const [especialidad, setEspecialidad] = useState("");
    const [distrito, setDistrito] = useState("");
    const [dataMedicos, setDataMedicos] = useState([]);
    const [medicos, setMedicos] = useState([]);
    const [dataEspecialidades, setDataEspecialidades] = useState([]);
    const [dataDistritos, setDataDistritos] = useState([]);

    useEffect(() => {
        //setMedicos(allData);
        getMedicos().then((rpta)=>{
            setDataMedicos(rpta);
        })

        getEspecialidades().then((rpta)=>{
            setDataEspecialidades(rpta);
        })

        getDistritos().then(rpta=>{
            setDataDistritos(rpta)
        })
    }
        , []);

    useEffect(() => {
        filtroMedicos();
    }
        , [especialidad]);

    /* Funcion para filtrar por especialidad */
    const filtroMedicos = () => {
        if (especialidad != "") {
            let dataFiltrada = dataMedicos.filter((medico) => {
                if (medico.especialidad == especialidad)
                    return medico;
            })
            setMedicos([...dataFiltrada]);
        }
        else {
            getMedicos().then((rpta)=>{
                setMedicos(rpta);
            })
        }

    }
    return (
        <>
            <div className="container">
                <Especialidades
                    key={dataEspecialidades.id}
                    esp={dataEspecialidades}
                    setEspecialidad={setEspecialidad}
                    especialidad={especialidad}>
                </Especialidades>
                <Distritos
                    key={dataDistritos.id}
                    dataDistritos={dataDistritos}
                    setDistrito={setDistrito}
                    distrito={distrito}>
                </Distritos>
                <div className="row justify-content-center py-4">
                    {medicos.map((medico) => {
                        //let indexEsp = dataEspecialidades.find(esp => esp.id === medico.especialidad);
                        //let indexEsp = 1;
                        return (
                            <CardMedico
                                key={medico.id}
                                medico={medico}
                                esp={dataEspecialidades} 
                                distritos = {dataDistritos}
                                />
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Medicos
