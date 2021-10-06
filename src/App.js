import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';
import HolaMundo, {AdiosMundo} from './components/HolaMundo';
import Saludar from './components/Saludar';

function App() {
  const user = {
    name: "Diestro Corleone",
    edad: 32,
    color: "Ultraviolet"
  };
  
  return (
    <main>
      <HolaMundo />
      <AdiosMundo />
      <Saludar name={userName} edad={edad} />
    </main>
  );
}

export default App;
