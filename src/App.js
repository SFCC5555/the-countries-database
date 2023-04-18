import React from 'react';
import './App.css';
import { LogoReact } from './components/LogoReact';
import { NavBar } from './components/NavBar';

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <LogoReact />
    </React.Fragment>

  );
}

export default App;
