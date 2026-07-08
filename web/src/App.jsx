import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  return (
    <div>
      <h1>Spycam</h1>
      <p>Interface de supervision à venir</p>
        <img src="http://127.0.0.1:8000/stream" alt="flux vidéo du robot" />
    </div>
  );
}

export default App
