import React, { useState, useEffect } from 'react'
import CardMedico from './CardMedico';
import Especialidades from './Especialidades';
import { getEspecialidades } from '../../../services/Especialidades';
import { getMedicos } from '../../../services/Medicos';
import { getDistritos } from '../../../services/Distritos';
import Distritos from './Distritos';
import { Link } from 'react-router-dom';
import "../components/css/card.css"

const Medicos = () => {

    const [especialidad, setEspecialidad] = useState("");
    const [distrito, setDistrito] = useState("");
    const [dataMedicos, setDataMedicos] = useState([]);
    const [medicos, setMedicos] = useState([]);
    const [dataEspecialidades, setDataEspecialidades] = useState([]);
    const [dataDistritos, setDataDistritos] = useState([]);

    useEffect(() => {
        //setMedicos(allData);
        getMedicos().then((rpta) => {
            setDataMedicos(rpta);
        })

        getEspecialidades().then((rpta) => {
            setDataEspecialidades(rpta);
        })

        getDistritos().then(rpta => {
            setDataDistritos(rpta)
        })
    }
        , []);

    useEffect(() => {
        filtroMedicos();
    }
        , [especialidad, distrito]);


    const filtroEspecialidades = (data) => {
        let espFiltrado = data.filter((medico) => {
            if (medico.especialidad == especialidad)
                return medico;
        })
        return espFiltrado;
        //setMedicos([...dataFiltrada]);
    };

    const filtroDistritos = (data) => {
        let disFiltrado = data.filter((medico) => {
            if (medico.distrito == distrito)
                return medico;
        })
        return disFiltrado;
    };


    /* Funcion para filtrar por especialidad */
    const filtroMedicos = () => {
        if (especialidad != "" || distrito != "") {
            if (distrito != "") {
                let filtro = filtroDistritos(dataMedicos);
                setMedicos([...filtro]);
                if (especialidad != "") {
                    let filtro2 = filtroEspecialidades(filtro);
                    setMedicos([...filtro2]);
                }
            }
            else if (especialidad != "") {
                let filtro = filtroEspecialidades(dataMedicos);
                setMedicos([...filtro]);
            }
        }
        else {
            getMedicos().then((rpta) => {
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
                        return (
                            <CardMedico
                                key={medico.id}
                                medico={medico}
                                esp={dataEspecialidades}
                                distritos={dataDistritos}
                            />
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Medicos
