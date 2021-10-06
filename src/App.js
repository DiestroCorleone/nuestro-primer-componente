import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';
import HolaMundo, {AdiosMundo} from './components/HolaMundo';
import Saludar from './components/Saludar';

function App() {
  return (
    <main>
      <HolaMundo />
      <AdiosMundo />
      <Saludar name="Diestro Corleone" edad="32" />
    </main>
  );
}

export default App;
