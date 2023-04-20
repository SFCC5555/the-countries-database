import React from "react";
import { useEffect } from "react";

const FilterMenu = ({ mode, closeFilterMenu, handleFilter}) => {


    useEffect(()=> {
        
        document.addEventListener('click',closeFilterMenu);

        return ()=> {

            document.removeEventListener('click',closeFilterMenu);
        }


    },[closeFilterMenu])


    return (
    <section className={`absolute flex flex-col gap-2 z-20 p-4 left-0 rounded-md ${mode}ModeElement`} style={{width:175, top:54}}> 

        <div onClick = {handleFilter} className="cursor-pointer hover:opacity-70">Africa</div>
        <div onClick = {handleFilter} className="cursor-pointer hover:opacity-70">America</div>
        <div onClick = {handleFilter} className="cursor-pointer hover:opacity-70">Asia</div>
        <div onClick = {handleFilter} className="cursor-pointer hover:opacity-70">Europe</div>
        <div onClick = {handleFilter} className="cursor-pointer hover:opacity-70">Oceania</div>
        <div onClick = {handleFilter} className="cursor-pointer hover:opacity-70">All</div>

    </section>
    )
}

export { FilterMenu };