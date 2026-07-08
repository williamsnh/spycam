import { useState, useEffect, useRef } from "react";
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const wsRef = useRef(null);

  useEffect(() => {
    const ws = new WebSocket("ws://127.0.0.1:8000/ws");
    ws.onopen = () => console.log("connecté au robot");
    ws.onclose = () => console.log("déconnecté");
    wsRef.current = ws;

    return () => ws.close();
  }, []);

  const sendForward = () => {
    wsRef.current.send("forward");
  };

  return (
    <div>
      <h1>spycam</h1>
      <img src="http://127.0.0.1:8000/stream" alt="flux vidéo du robot" />
      <button onClick={sendForward}>Avancer</button>
    </div>
  );
}

export default App;
