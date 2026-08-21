import map from "../../assets/images/map.svg";
import filterAllImg from '../../assets/images/filter_all.svg';
import filterSharkImg from '../../assets/images/filter_shark.svg';
import filterTouchImg from '../../assets/images/filter_touch.svg';
import filterGatorImg from '../../assets/images/filter_gator.svg';
import filterSnakeImg from '../../assets/images/filter_snake.svg';
import filterTurtleImg from '../../assets/images/filter_turtle.svg';
import closeBtn from '../../assets/images/close_btn.svg';
import animalSelectionLabel from '../../assets/images/animal_select.svg'
import pinFrame from '../../assets/images/pin.svg';

import { useState } from 'react'
import {TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import { animals } from '../../assets/data/animal';
import './WorldMap.css';
import AnimalModal from '../AnimalModal/AnimalModal';

const mapFilters = [
  { id: 'all', label: 'All', value: 'All', image: filterAllImg },
  { id: 'shark', label: 'Shark Reef', value: 'Shark Reef', image: filterSharkImg },
  { id: 'touch', label: 'Touch Tank', value: 'Touch Tank', image: filterTouchImg },
  { id: 'gator', label: 'Gator Alley', value: 'Gator Alley', image: filterGatorImg },
  { id: 'snake', label: 'Snake Den', value: 'Snake Den', image: filterSnakeImg },
  {id: 'turtle', label: 'Turtle Trail', value: 'Turtle Trail', image: filterTurtleImg }
];


export default function WorldMap() {
    const [selectAnimal, setSelectAnimal] = useState(null);

    const [activeFilter, setActivefilter] = useState('All');

    const filteredAnimals = animals.filter((animal) => {
        if (activeFilter === 'All') return true;

        return animal.location_zone  === activeFilter;
    });

    return (
        <div className="map-page">
            <div className="filter-hud-container">
                {activeFilter === 'All' ? (
                    <img src={animalSelectionLabel} alt="Animal Selection" className="hud-label-img" />
                ) : (
                    <button type="button" className="hud-close-filter-btn" onClick={() => setActivefilter('All')}>
                        <img src={closeBtn} alt="Close Filter" className="hud-close-img" />
                    </button>
                )}

                <div className="filter-buttons-row">
                    {mapFilters.map((filter) => (
                        <button 
                        key={filter.id}
                        type="button"
                        className={`filter-bubble-btn ${activeFilter === filter.value ? 'is-active' : ''}`}
                        onClick={() => setActivefilter(filter.value)}
                        >
                            <img src={filter.image} alt={filter.label} className="filter-bubble-img" />
                        </button>
                    ))}
                </div>
            </div>
            <TransformWrapper initialScale={1} minScale={1} maxScale={4} centerOnInit={true} disabled={false}>
                <TransformComponent wrapperClass="zoom-viewport" contentClass="zoom-content">
                    <div className="map-wrapper">
                        <img src={map} alt="World Map" className="map-image" />
                        {filteredAnimals.map((animal) => (
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
                                <div className="custom-pin-container">
                                    <img src={pinFrame} alt="Pin location frame marker" className="pin-frame-bg" />
                                    <img src={animal.image} alt={animal.image} className="pin-animal-avatar" />
                                </div>
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