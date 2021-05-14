import React, { useState, useEffect } from 'react'
import { END_POINT } from '../../../enviroment/enviroment'
import { getEspecialistas } from '../../../services/especialistas'
import CardEspecialista from './CardEspecialista'
import FiltrosEspecialistas from './FiltrosEspecialistas'
import Loader from './Loader'


const ShowEspecialistas = () => {

    const [especialistas, setEspecialistas] = useState([]);
    const [preloader, setPreloader] = useState(true);



    useEffect(() => {
        getEspecialistas().then(rpta => {
            setEspecialistas(rpta);
        })
    }, [])

    useEffect(()=>{
        if(especialistas){
            setPreloader(false)
        }
    },[especialistas])
    
    if(preloader){
        return <Loader></Loader>
    }
    else{
        return (
            <main className="container">
                <FiltrosEspecialistas></FiltrosEspecialistas>
                <div className="row">
                    {especialistas.map((esp) => {
                        return (<div className="col s12 m6 l4 xl4">
                            <CardEspecialista key={esp.id} esp={esp}></CardEspecialista>
                        </div>
                        )
    
                    })
                    }
    
                </div>
            </main>
        )
    }
   

}

export default ShowEspecialistas
