import React, { useState, useEffect } from 'react'
import CardMedico from './CardMedico';
import Especialidades from './Especialidades';

const Medicos = () => {

    const [especialidad, setEspecialidad] = useState("");
    const [dataMedicos, setDataMedicos] = useState([]);
    const [medicos, setMedicos] = useState([]);
    const allData = [
        { nombre: "Dr. Juan Perez", especialidad: 1, imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRRax5Ud9e2gqIl3CeCYunrrNQVWfbvlcqpNQ&usqp=CAU", lugar: "Av. Larco 123" },
        { nombre: "Dr. Rosa Pereira", especialidad: 2, imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRRax5Ud9e2gqIl3CeCYunrrNQVWfbvlcqpNQ&usqp=CAU", lugar: "Av. Larco 123" },
        { nombre: "Dr. Jose Perez", especialidad: 2, imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRRax5Ud9e2gqIl3CeCYunrrNQVWfbvlcqpNQ&usqp=CAU", lugar: "Av. Larco 123" },
        { nombre: "Dr. Richard Garcia", especialidad: 3, imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRRax5Ud9e2gqIl3CeCYunrrNQVWfbvlcqpNQ&usqp=CAU", lugar: "Av. Larco 123" },
        { nombre: "Dr. Lorena Ramos", especialidad: 3, imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRRax5Ud9e2gqIl3CeCYunrrNQVWfbvlcqpNQ&usqp=CAU", lugar: "Av. Larco 123" },
        { nombre: "Dr. Julian Castro", especialidad: 1, imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRRax5Ud9e2gqIl3CeCYunrrNQVWfbvlcqpNQ&usqp=CAU", lugar: "Av. Larco 123" },
        { nombre: "Dr. Ramon Valdez", especialidad: 2, imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRRax5Ud9e2gqIl3CeCYunrrNQVWfbvlcqpNQ&usqp=CAU", lugar: "Av. Larco 123" },
        { nombre: "Dr. Liliana Perez", especialidad: 1, imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRRax5Ud9e2gqIl3CeCYunrrNQVWfbvlcqpNQ&usqp=CAU", lugar: "Av. Larco 123" },
    ]

    const dataEspecialidades = [
        { id: 1, nombre: "Cardiólogo" },
        { id: 2, nombre: "Neurólogo" },
        { id: 3, nombre: "Pediatra" }];

    useEffect(() => {
        //setMedicos(allData);
        setDataMedicos(allData);
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
        else{
            setMedicos(allData);
        }
        
    }

    return (

        <>
            <div className="container">
                <Especialidades
                    key={dataEspecialidades.id}
                    esp={dataEspecialidades}
                    setEspecialidad={setEspecialidad}
                    especialidad = {especialidad}>
                </Especialidades>
                <div className="row justify-content-center py-4">
                    {medicos.map((medico) => {
                        let indexEsp = dataEspecialidades.find(esp => esp.id === medico.especialidad);
                        return (
                            <CardMedico
                                key={medico.id}
                                medico={medico}
                                esp={indexEsp} />
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Medicos
