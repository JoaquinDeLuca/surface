import React from 'react'
import { MapContainer, TileLayer,Marker , Popup} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import './map.css'
import { Icon } from './Icon'

const MapView = () => {
  
  const mindhub = [-34.621196969507245, -58.36498020136218]
    return (
    <MapContainer style={{zIndex: "0 !important"}} center={mindhub} zoom={15} >
        <TileLayer style={{zIndex: "0 !important" }}
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
        <Marker style={{zIndex: "0 !important"}} position={mindhub} icon={Icon}/>
  
    
    </MapContainer>
  )
}

export default MapView