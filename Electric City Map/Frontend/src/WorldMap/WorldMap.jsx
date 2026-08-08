import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import map from "../assets/map.svg";
import './WorldMap.css';

export default function WorldMap () {
    return (
    <div className="map-page">
    <div className="map-container">
    <img 
    src={map}
    alt="World Map"
    className="map-image"
    />
    </div>
    </div>
    )
}