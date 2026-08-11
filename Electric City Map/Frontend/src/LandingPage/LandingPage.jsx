import { useState, useEffect } from 'react';
import "./LandingPage.css";
import aquariumVideo from '../assets/aquarium-scene.mp4'; 
import logo from "../assets/logo.svg";
import startBtn from "../assets/start-btn.svg";

export default function LandingPage () {
    return (
    <div className="landing-page">
      <video className="background-video" autoPlay loop muted playsInline>
        <source src={aquariumVideo} type="video/mp4" /> 
        Your browser does not support the video tag.
        </video>

     <header className="landing-content">
        <img src={logo} alt="Map Explorer Logo" className="main-title-img" /> {/* logo jumps slightly */}
        <button type="button" className="start-btn"><img src={startBtn} alt="Start button" className="start-btn-img"/> </button>
     </header>

     <footer className="landing-footer">Electric City Aquarium and Reptiles Den</footer>
    </div>
    );

}