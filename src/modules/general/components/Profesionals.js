import React from 'react'
import '../css/profesionals.css'
import CardOpinion from './CardOpinion'
const Profesionals = () => {

    const opinions = [
        {
            "nombre": "Rosa Casas",
            "comentario": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi laborum fugit cum corrupti maiores officia",
            "foto": "https://sergiorada.com.co/wp-content/uploads/2019/12/dr-perfil.jpg"
        },
        {
            "nombre": "Salomon Castro", "comentario": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi laborum fugit cum corrupti maiores officia",
            "foto": "https://doctoresecuador.com.ec/profile/picture/5e71a4d32eb7a85aa85d6c9e"
        },
        {
            "nombre": "Junior Caceres", "comentario": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi laborum fugit cum corrupti maiores officia",
            "foto": "https://staticprod.topdoctors.com.ar/provider/106117/image/profile/medium/prof_433_20190515222545.jpeg"
        }
    ]


    return (

        <div className="container">
            <h2 className="subtitle">
                Opiniones de algunos profesionales
                </h2>
            <div className="row">
                
                    {opinions.map((opinion) => {
                        return (
                            <div className="col s12 m6 l4 xl4">
                            <CardOpinion opinion={opinion}></CardOpinion>
                            </div>
                        );
                    })}

                
            </div>
        </div>
    )
}

export default Profesionals
