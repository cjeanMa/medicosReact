import React from 'react'
import { useParams } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'
import InfoEspecialista from '../components/InfoEspecialista'

const InformationEsp = () => {
    
    let {id} = useParams();

    return (
        <div className="blue lighten-5">
            <Header></Header>
            <InfoEspecialista esp = {id}></InfoEspecialista>
            <Footer></Footer>
        </div>
    )
}

export default InformationEsp
