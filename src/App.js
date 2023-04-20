import React from 'react';
import './App.css';
import { LogoReact } from './components/LogoReact';
import { NavBar } from './components/NavBar';
import { Search } from './components/Search';
import { Filter } from './components/Filter';
import { useState, useEffect } from 'react';
import { CountrieCard } from './components/CountrieCard';

function App() {

  const [mode,setMode] = useState('light');

  function handleMode() {

    mode==='light'?setMode('dark'):setMode('light');

  }

  const [data,setData] = useState(null)

  useEffect(()=> {

      fetch('https://restcountries.com/v2/all')
      .then(response=>response.json())
      .then(data=>setData(data));


  },[])


  return (
    <div className={`${mode}ModeBackground h-full`}>
      <NavBar mode = {mode} handleMode={handleMode} />
      <section className='mx-5 mb-12 flex flex-col items-stretch gap-8 sm:flex-row sm:justify-between sm:mx-10'>
        <Search mode = {mode} />
        <Filter mode = {mode} />
      </section>

      <section className='px-5 sm:px-10 flex justify-between gap-y-10 flex-wrap'>
        {data&&data.map(countrie=>(<CountrieCard key={countrie.name} mode={mode} src={countrie.flag} name={countrie.name} population={countrie.population} region={countrie.region} capital = {countrie.capital} />))}
      </section>
      <LogoReact />
    </div>

  );
}

export default App;
