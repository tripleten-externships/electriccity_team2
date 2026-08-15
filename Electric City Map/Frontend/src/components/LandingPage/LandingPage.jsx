import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "./LandingPage.css";
import aquariumVideo from '../../assets/images/aquarium-scene.mp4'; 
import logo from "../../assets/images/logo.svg";
import startBtn from "../../assets/images/start-btn.svg";

export default function LandingPage () {
   const navigate = useNavigate();


    return (
    <div className="landing-page">
      <video className="background-video" autoPlay loop muted playsInline>
        <source src={aquariumVideo} type="video/mp4" /> 
        Your browser does not support the video tag.
        </video>

     <header className="landing-content">
        <img src={logo} alt="Map Explorer Logo" className="main-title-img" /> {/* logo jumps slightly */}
        <button type="button" className="start-btn" onClick={() => navigate('/map')}><img src={startBtn} alt="Start button" className="start-btn-img"/> </button>
     </header>

     <footer className="landing-footer">Electric City Aquarium and Reptiles Den</footer>
    </div>
    );

}