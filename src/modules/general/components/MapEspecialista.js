import React from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import "leaflet/dist/leaflet.css"
import iconLocation from '../img/iconLocation.png'

const MapEspecialista = () => {

    const position = [-12.0621065, -77.0365256]

    return (
            <MapContainer style={{minwidth:"200px", width:"300px", height:"300px"}} center={position} zoom={15} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                      </Popup>
                </Marker>
            </MapContainer>

    )
}

export default MapEspecialista
