import React from 'react';
import './App.css';
import { LogoReact } from './components/LogoReact';
import { NavBar } from './components/NavBar';
import { Search } from './components/Search';
import { Filter } from './components/Filter';
import { Detail } from './components/Detail';
import { useState, useEffect } from 'react';
import { CountrieCard } from './components/CountrieCard';

function App() {

  const [data,setData] = useState(null);
  const [newData,setNewData] = useState(null);
  const [mode,setMode] = useState('light');
  const [region,setRegion] = useState('');
  const [inputValue,setInputValue] = useState('');
  const [detailState,setDetailState] = useState(false);
  const [detailData,setDetailData] = useState({});
  const [serverError,setServerError] = useState(false);



  function handleMode() {

    mode==='light'?setMode('dark'):setMode('light');

  }



  useEffect(()=> {

      fetch('https://restcountries.com/v2/all')
      .then(response=>response.json())
      .then(data=>{
        setData(data)
        setNewData(data)
        console.log(data)
      }
        ).catch(error => {
          console.error('Error:', error);
          setServerError(true);
        });;


  },[])


  function handleChange(e) {

    let match = new RegExp(e.target.value,'i');

    let regionMatch = new RegExp(region)

    setNewData(data.filter(countrie=>match.test(countrie.name) && regionMatch.test(countrie.region)));
    
    setInputValue(e.target.value);
  }

  function handleFilter(e) {

    let match = new RegExp(inputValue,'i')

    let regionMatch = new RegExp(e.target.innerText);

    if (e.target.innerText==='All') {

      setNewData(data.filter(countrie=>match.test(countrie.name)));
      setRegion('');


    } else {
      setNewData(data.filter(countrie=>regionMatch.test(countrie.region) && match.test(countrie.name)));
      setRegion(e.target.innerText)
    }
 
  }


  function renderDetail(e) {

    setDetailData(...data.filter(countrie=>countrie.name===e.target.id));

    setDetailState(true);

  }

  function closeDetail() {
    setDetailState(false);
  }


  return (
    <div className={`${mode}ModeBackground h-full min-h-screen`}>
      <NavBar mode = {mode} handleMode={handleMode} />
      {!detailState&&<section className='mx-5 mb-12 flex flex-col items-stretch gap-8 sm:flex-row sm:justify-between sm:mx-10'>
        <Search mode = {mode} handleChange={handleChange} />
        <Filter mode = {mode} region={region} handleFilter={handleFilter} />
      </section>}

      {serverError&&<div className='flex flex-col items-center justify-center p-5'>
                  <div className=' text-red-400' >Server Error:</div>
                  <p>The server is temporarily unable to service your request due to maintenance downtime or capacity problems. Please try again later.</p>
      </div>}

      {!detailState&&<section className='px-5 sm:px-10 flex justify-between gap-y-10 flex-wrap'>
        {newData&&newData.map(countrie=>(<CountrieCard key={countrie.name} renderDetail = {renderDetail} mode={mode} src={countrie.flag} name={countrie.name} population={countrie.population} region={countrie.region} capital = {countrie.capital} />))}
      </section>}

      {detailState&&<Detail mode = {mode} data={data} src = {detailData.flag} name = {detailData.name} nativeName = {detailData.nativeName} population = {detailData.population} region = {detailData.region} subregion = {detailData.subregion} capital = {detailData.capital?detailData.capital:'No Capital'} topLevelDomain = {detailData.topLevelDomain} currencies = {detailData.currencies?detailData.currencies.map(c=>c.name).join(', '):'No Currencies'} languages={detailData.languages.map(l=>l.name).join(', ')} borders={detailData.borders?detailData.borders:[]} closeDetail = {closeDetail} renderDetail={renderDetail} />}

      <LogoReact />
    </div>

  );
}

export default App;
