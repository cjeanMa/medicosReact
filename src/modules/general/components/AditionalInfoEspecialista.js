import React from 'react'
import { Tab, Tabs } from 'react-materialize'
import GeneralInfoEspecialista from './GeneralInfoEspecialista'
import "../css/aditionalInfoEspecialista.css"
import OpinionesEspecialistas from './OpinionesEspecialistas'

const AditionalInfoEspecialista = ({ esp }) => {
    return (
        <>
            <Tabs className="tab-demo z-depth-1 blue darken-2">
                <Tab
                    active
                    options={{
                        duration: 300,
                        onShow: null,
                        responsiveThreshold: Infinity,
                        swipeable: false
                    }}
                    title="General"
                >
                    <GeneralInfoEspecialista esp={esp} ></GeneralInfoEspecialista>
  </Tab>
                <Tab
                    options={{
                        duration: 300,
                        onShow: null,
                        responsiveThreshold: Infinity,
                        swipeable: false
                    }}
                    title="Opiniones"
                >
                    <OpinionesEspecialistas esp={esp.opinions}></OpinionesEspecialistas>
  </Tab>
                <Tab
                    options={{
                        duration: 300,
                        onShow: null,
                        responsiveThreshold: Infinity,
                        swipeable: false
                    }}
                    title="Experiencia"
                >
                    
  </Tab>
              
            </Tabs>
        </>
    )
}

export default AditionalInfoEspecialista
