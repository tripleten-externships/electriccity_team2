import { useState, useEffect } from 'react';
import "./LandingPage.css";
import aquariumVideo from '../assets/aquarium-scene.mp4'; 

export default function LandingPage () {
    return (
    <div className="landing-page">
      <video className="background-video" autoPlay loop muted playsInline>
        <source src={aquariumVideo} type="video/mp4" /> 
        Your browser does not support the video tag.
        </video>
     <header className="landing-content">
        <h1>
        <span className="title-map">Map</span>
        <span className="title-explorer">Explorer</span>
        </h1>
        <button type="button" className="start-btn">Start</button>
     </header>
     <footer className="landing-footer">Electric City Aquarium and Reptiles Den</footer>
    </div>
    );

}