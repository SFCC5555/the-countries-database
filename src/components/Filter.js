import React from "react";
import { FilterMenu } from "./FilterMenu";
import { useState } from "react";

const Filter = ({mode})=> {

    const [filterMenu,setFilterMenu] = useState(false);

    function controlFilterMenu() {

            filterMenu?setFilterMenu(false):setFilterMenu(true);
    }

    function closeFilterMenu(e) {
        
        if (e.target.id!=='filterButton') {
            setFilterMenu(false);
        }
    }


    return (

        <div className="relative text-sm font-semibold">
            <button id='filterButton' onClick={controlFilterMenu} className={`relative text-left pl-5 filterButton h-12 rounded-md ${mode}Shadow bg-${mode}ModeElements text-${mode}ModeText hover:opacity-70`} style={{width:175}}>
            
                Filter by Region
                
                <span className="absolute right-5 top-5 w-2 h-2 inline-block bg-no-repeat bg-center bg-contain" style={{ backgroundImage: `url(${require(`../assets/icons/${mode}DownArrowIcon.png`)})` }}/>

            </button>

            {filterMenu&&<FilterMenu mode = {mode} closeFilterMenu={closeFilterMenu} />}

        </div>


    )
}

export { Filter };

