import React from 'react'
import LandingAbout from '../components/LandingAbout'
import LandingCarousel from '../components/LandingCarousel'
import LandingContact from '../components/LandingContact'
import LandingPlaces from '../components/LandingPlaces'
import LandingServices from '../components/LandingServices'
import "../components/css/styles.css";

const LandingPage = () => {
    return (
        <>
                <LandingCarousel />
                <LandingAbout />
                <LandingServices />
                <LandingPlaces />
                <LandingContact />
        </>
    )
}

export default LandingPage
