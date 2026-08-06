import { useState, useEffect } from 'react';
import LandingPage from './LandingPage/LandingPage';

import './App.css'

function App() {
  const [currentScreen, setCurrentScreen] = useState('landing');

  return (
   <div className="app">
    <LandingPage />
    </div>
  );
}

export default App;
