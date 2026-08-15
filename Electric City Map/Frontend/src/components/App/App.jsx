import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from '../../components/LandingPage/LandingPage';
import WorldMap from '../../components/WorldMap/WorldMap';

import './App.css'

function App() {
  

  return (
   <div className="app">
    <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/map" element={<WorldMap key="world-map" />} />
      </Routes>
    </div>
  )
};

export default App
