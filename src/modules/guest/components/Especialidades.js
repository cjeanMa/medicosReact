import React, { useState } from 'react'

const Especialidades = (props) => {

    /*  const [lista, setLista] = useState([]); */

    const [styleBtn, setStyleBtn] = useState("btn-primary");

    const updateFiltro = (valor) => {
        /*  let nuevaLista = [...lista];
         nuevaLista.push(valor);
         setLista(nuevaLista); */
        if (props.especialidad == valor) {
            props.setEspecialidad("");
        }
        else {
            props.setEspecialidad(valor);
        }
    }

    return (
        <div className="row py-3">
            <div className="col-12 alert alert-secondary">
                <p>Que especialista estas buscando:</p>
                {props.esp.map((especialidad) => {
                    return (
                        <button className="btn btn-sm btn-primary mr-3" value={especialidad} onClick={(() => { updateFiltro(especialidad.id) })}>
                            <span key={especialidad.id}> {especialidad.nombre}</span>
                        </button>
                    );
                })}
            </div>
        </div>
    )
}

export default Especialidades
