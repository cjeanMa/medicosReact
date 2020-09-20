import React from 'react'

const Distritos = (props) => {

    const updateFiltroDistrito = (valor) => {
        /*  let nuevaLista = [...lista];
         nuevaLista.push(valor);
         setLista(nuevaLista); */
        if (props.distrito == valor) {
            props.setDistrito("");
        }
        else {
            props.setDistrito(valor);
        }
    }

    return (
        <div className="row">
        <div className="col-12 alert alert-secondary">
            <p>En que distrito lo buscas:</p>
            {props.dataDistritos.map((distrito) => {
                return (
                    <button className="btn btn-sm btn-primary mr-3" value={distrito} onClick={(() => { updateFiltroDistrito(distrito.id) })}>
                        <span key={distrito.id}> {distrito.nombre}</span>
                    </button>
                );
            })}
        </div>
    </div>
    )
}

export default Distritos
