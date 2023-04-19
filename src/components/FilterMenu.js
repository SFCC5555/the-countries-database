import React from "react";
import { useEffect } from "react";

const FilterMenu = ({ mode, closeFilterMenu}) => {


    useEffect(()=> {
        
        document.addEventListener('click',closeFilterMenu);

        return ()=> {

            document.removeEventListener('click',closeFilterMenu);
        }


    },[closeFilterMenu])


    return (
    <section className={`absolute flex flex-col gap-2 p-4 left-0 rounded-md ${mode}ModeElement`} style={{width:175, top:54}}> 

        <div className="cursor-pointer hover:opacity-70">Africa</div>
        <div className="cursor-pointer hover:opacity-70">America</div>
        <div className="cursor-pointer hover:opacity-70">Asia</div>
        <div className="cursor-pointer hover:opacity-70">Europe</div>
        <div className="cursor-pointer hover:opacity-70">Oceania</div>
        <div className="cursor-pointer hover:opacity-70">All</div>

    </section>
    )
}

export { FilterMenu };