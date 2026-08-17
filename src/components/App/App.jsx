import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import LandingPage from '../../components/LandingPage/LandingPage';
import WorldMap from '../../components/WorldMap/WorldMap';

import './App.css'

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') return;

    let timer = setTimeout (() => {
      navigate('/');
    }, 120000);

    const resetTimer =() => {
      clearTimeout(timer);
      timer=setTimeout(() => {
        navigate('/');
      }, 120000);
    };
    window.addEventListener('touchstart', resetTimer);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('touchstart', resetTimer);
    };
  }, [location, navigate]);

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
