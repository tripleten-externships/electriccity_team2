import { useState, useEffect } from 'react';
import "./LandingPage.css";

export default function LandingPage () {
    return (
    <page className="landing-page">
      <video className="background-video" autoplay loop muted playsInline>
        <link src="/aquarium-scene.mp4" type="video/mp4" /> 
        </video>
     <header className="landing-content">
        <h1>
        <span className="title-map">Map</span>
        <span className="title-explorer">Explorer</span>
        </h1>
        <button type="submit" className="start-btn">Start</button>
     </header>
     <footer className="landing-footer">Electric City Aquarium and Reptiles Den</footer>
    </page>
    );

}