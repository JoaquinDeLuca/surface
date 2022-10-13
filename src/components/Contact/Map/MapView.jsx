import React from 'react'
import { MapContainer, TileLayer,Marker , Popup} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import './map.css'
import { Icon } from './Icon'

const MapView = () => {
  
  const mindhub = [-34.621196969507245, -58.36498020136218]
    return (
    <MapContainer center={mindhub} zoom={15} >
        <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
        <Marker position={mindhub} icon={Icon}/>
  
    
    </MapContainer>
  )
}

export default MapView