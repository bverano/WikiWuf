import React from 'react';
import Navbar from './components/Navbar/Navbar'
import PhotosGrid from './components/PhotosGrid/PhotosGrid'

import DogsState from './store/dogs/State'

import './App.css'

function App() {
  return (
    <DogsState>
      <Navbar />
      <PhotosGrid />
    </DogsState>

  );  
}

export default App;
