import { MapContainer, ImageOverlay, Marker, Popup } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';
import { animals } from '../data/animal';
import map from "../assets/map.svg";
import 'leaflet/dist/leaflet.css';
import './WorldMap.css';

const bounds = [[-90,-180], [90,180]];

export default function WorldMap() {
    return (
        <MapContainer
            key="aquarium-map"
            center={[20, 0]}
            zoom={2}
            minZoom={2}
            maxZoom={6}
            style={{ height: '100vh', width: '100%' }}
        >
            <ImageOverlay
                url={map}
                bounds={bounds}
            />
            <MarkerClusterGroup>
                {animals.map((animal) => (
                    <Marker 
                        key={animal.id}
                        position={[animal.coordinates.lat, animal.coordinates.lng]}
                    >
                        <Popup>
                            {animal.name}
                        </Popup>
                    </Marker>
                ))}
            </MarkerClusterGroup>
        </MapContainer>
    )
}