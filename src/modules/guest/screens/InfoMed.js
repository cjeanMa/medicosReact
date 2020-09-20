import React from 'react'
//import { useParams } from 'react-router-dom';

const InfoMed = (props) => {
    //const { idMedico } = useParams();
    return (
        <div>
            <InfoMed medico={props.match.params.id}/>
        </div>
    )
}

export default InfoMed
