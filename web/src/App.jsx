import { useState } from 'react'
import { useEffect } from "react";
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  useEffect(() => {
  const ws = new WebSocket("ws://127.0.0.1:8000/ws");

  ws.onopen = () => console.log("connecté au robot");
  ws.onclose = () => console.log("déconnecté");

  return () => ws.close();
  }, []);
  return (
    <div>
      <h1>Spycam</h1>
      <p>Interface de supervision à venir</p>
        <img src="http://127.0.0.1:8000/stream" alt="flux vidéo du robot" />
    </div>
  );
}

export default App
