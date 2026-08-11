import { useState } from 'react'
import WorldMap from "./WorldMap/WorldMap";

import './App.css'

function App() {
  

  return (
   <div className="app">
    <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/map" element={<WorldMap />} />
      </Routes>
    </div>
  )
};

export default App
