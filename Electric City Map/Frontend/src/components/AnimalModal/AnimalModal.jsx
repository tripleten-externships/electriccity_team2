import extinctImg from '../../assets/images/ext_stat.svg';
import extinctInWildImg from '../../assets/images/ext-wild_stat.svg';
import criticallyEndangeredImg from '../../assets/images/crit_stat.svg';
import endangeredImg from '../../assets/images/endangered_stat.svg';
import vulnerableImg from '../../assets/images/vul_stat.svg';
import nearThreatImg from '../../assets/images/near-threat_stat.svg';
import leastConcernImg from '../../assets/images/least-con_stat.svg';

import {useState} from 'react';

import closeBtn from '../../assets/images/close_btn.svg';
import closeBtnSelected from '../../assets/images/close_btn-selected.svg';
import funFactSpace from '../../assets/images/fun_fact.svg';
import classSpace from '../../assets/images/class_card.svg';
import findBtn from '../../assets/images/find-btn.svg';
import findBtnSelected from '../../assets/images/find-btn_selected.svg';
import aquariumMap from '../../assets/images/aquarium-map.svg';

import './AnimalModal.css';

const statusImages = {
    'Extinct': extinctImg,
    'Extinct in Wild': extinctInWildImg,
    'Critically Endangered': criticallyEndangeredImg,
    'Endangered': endangeredImg,
    'Vulnerable': vulnerableImg,
    'Near Threatened': nearThreatImg,
    'Least Concern': leastConcernImg,
};


export default function AnimalModal({ animal, onClose }) {
    const [showAquariumMap, setShowAquariumMap] = useState(false);
    const [isClosePressed, setIsClosePressed] = useState(false);

    return (
        <div className="modal-overlay">
            <div className="modal-container">
            <div className="modal-left">
                <div className="modal-header-static">
                    <h1 className="animal-name">{animal.name}</h1>
                    <h2 className="animal-scientific">{animal.science_name}</h2>

                    <div className="conservation-row">
                        <img 
                        src={statusImages[animal.conservation_status] || ""}
                        alt={animal.conservation_status}
                        className="status-badge-img"
                        />
                    </div>
                </div>

                    <div className="modal-scroll">
                    <div className="info-section origin-box">
                        <h3>Native Origin</h3>
                        <div className="section-body">
                            <p>{animal.native_region}</p>
                        </div>
                    </div>

                    <div className="info-section threats-box">
                        <h3>Threats</h3>
                        <div className="section-body">
                            {animal.threats}
                        </div>
                    </div>
                   
                   <div className="class-card-row">
                    <div className="card-class">
                        <img src={classSpace} alt="Animal class" className="class-space-img" />
                        <p className="taxonomy-text">{animal.taxonomy_category}</p>
                    </div>
                    </div>
                    <button className="find-btn" onClick={() => setShowAquariumMap(!showAquariumMap)}>
                        <img src={showAquariumMap ? findBtnSelected : findBtn} alt="Find in Aquarium" className="find-btn-img" /> 
                    </button>
                </div>
            </div>

            <div className="modal-right">
                {showAquariumMap
                ? <img src={aquariumMap} alt="Aquarium Map" className="aquarium-map" />
                : <img src={animal.image} alt={animal.name} className="animal-image" />
            }
            {!showAquariumMap && (
                <div className="fun-fact-container">
                <img src={funFactSpace} alt="Fun Fact" className="fun-fact-img" />
                <div className="fun-fact-text-wrapper">
                <p className="fun-fact-text">{animal.fun_fact}</p>
                </div>
                </div>
            )}
            </div>
            <button className="modal-close" onClick={onClose} onTouchStart={() => setIsClosePressed(true)} onTouchEnd={() => setIsClosePressed(false)}>
                <img src={isClosePressed ? closeBtnSelected : closeBtn} alt="Close button" className="close-btn-img" /> 
            </button>
            </div>
        </div>
    )
}