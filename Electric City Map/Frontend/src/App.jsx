<<<<<<< HEAD
import { useState } from 'react'
import WorldMap from "./WorldMap/WorldMap";
=======
import { useState, useEffect } from 'react';
import LandingPage from './LandingPage/LandingPage';
>>>>>>> feature/landing-page

import './App.css'

function App() {
<<<<<<< HEAD
  

  return (
   <div className="app">
    <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/map" element={<WorldMap />} />
      </Routes>
    </div>
  )
};
=======
  const [currentScreen, setCurrentScreen] = useState('landing');

  return (
   <div className="app">
    <LandingPage />
    </div>
  );
}
>>>>>>> feature/landing-page

export default App;
