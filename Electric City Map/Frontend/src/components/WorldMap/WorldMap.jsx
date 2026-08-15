import { useState } from 'react'
import {TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import { animals } from '../../assets/data/animal';
import map from "../../assets/images/map.svg";
import './WorldMap.css';
import AnimalModal from '../AnimalModal/AnimalModal';


export default function WorldMap() {
    const [selectAnimal, setSelectAnimal] = useState(null);

    return (
        <div className="map-page">
            <TransformWrapper initialScale={1} minScale={1} maxScale={4} centerOnInit={true} disabled={false}>
                <TransformComponent wrapperClass="zoom-viewport" contentClass="zoom-content">
                    <div className="map-wrapper">
                        <img src={map} alt="World Map" className="map-image" />
                        {animals.map((animal) => (
                            <button 
                            key={animal.id}
                            type="button"
                            className="map-pin"
                            style={{
                                position: 'absolute',
                                top: `${animal.coordinates.y}%`,
                                left: `${animal.coordinates.x}%`
                            }}
                            onClick={() => setSelectAnimal(animal)}
                            >
                                <div className="pin-pulse" />
                            </button>
                        ))}
                       
                    </div>
                </TransformComponent>
            </TransformWrapper> 
            {selectAnimal && (
                            <AnimalModal
                            animal={selectAnimal}
                            onClose={() => setSelectAnimal(null)}
                            />
                        )}
        </div>
    )
}