import React from 'react'


const OpinionPacienteEspecialista = () => {

    const Nombre = "Jose Mariano Capellan"
    const fondos = [
        "blue lighten-3 fondo_avatar",
        "red lighten-3 fondo_avatar",
        "yellow lighten-3 fondo_avatar",
        "orange lighten-3 fondo_avatar",
        "purple lighten-3 fondo_avatar",
        "cyan lighten-3 fondo_avatar",
    ]


    return (
        <>
            <div className="row card_opinion_paciente">
                <div className="col s2 m1">
                    <div className="avatar_paciente">
                        <div className={fondos[Math.round(Math.random() * 5)]}>
                            <p>{Nombre[0]}</p>
                        </div>
                    </div>
                </div>
                <div className="col s10 m11">
                    <p className="nombre_paciente">
                        {Nombre}
                    </p>
                    <p className="fecha_opinion">
                        Oct 12, 2020
                    </p>
                    <p className="body_opinion">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Ea ratione sunt dolores aliquid, architecto est, velit 
                        eius totam maxime aut labore beatae possimus necessitatibus 
                        unde excepturi veritatis hic voluptate illo consequuntur? 
                        Rerum, praesentium. Pariatur excepturi distinctio vero sed 
                        quas hic error ex exercitationem, consequatur vel, aspernatur
                         veniam adipisci earum vitae.
                    </p>
                </div>
            </div>
            <div className="separador"></div>
        </>
    )
}

export default OpinionPacienteEspecialista
