import React from 'react';
import './App.css';
import { LogoReact } from './components/LogoReact';
import { NavBar } from './components/NavBar';
import { Search } from './components/Search';
import { Filter } from './components/Filter';
import { useState } from 'react';

function App() {

  const [mode,setMode] = useState('light');

  function handleMode() {

    mode==='light'?setMode('dark'):setMode('light');

  }


  return (
    <div className={`bg-${mode}ModeBackground h-full`}>
      <NavBar mode = {mode} handleMode={handleMode} />
      <section className='mx-5 flex flex-col items-stretch gap-8 sm:flex-row'>
        <Search mode = {mode} />
        <Filter mode = {mode} />
      </section>
      <LogoReact />
    </div>

  );
}

export default App;
