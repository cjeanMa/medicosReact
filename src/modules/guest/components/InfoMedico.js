import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { getMedico } from "../../../services/Medicos"

const InfoMedico = (props) => {

    const [medico, setMedico] = useState([]);

    useEffect(() => {
        getMedico(props.medico).then(rpta=>{
            setMedico(rpta);
        })
    }, [])

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <p>{this.props.match.params.id}</p>
                    </div>
                    <div className="col-6">
                        <h5></h5>
                        <h2></h2>
                        <h2></h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoMedico
