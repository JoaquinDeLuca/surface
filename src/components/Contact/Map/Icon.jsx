import L from 'leaflet'

const url = "https://i.postimg.cc/QMmTXyks/marcador-de-posicion.png"

export const Icon = L.icon({
    iconUrl: url,
    iconRetinaUrl: url, iconAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: [35, 35],
    className: "leaflet-venue-icon",
})  