import React from "react";

const Detail = ({ mode,data,src,name,nativeName,population,region,subregion,capital,topLevelDomain,currencies,languages,borders,closeDetail,renderDetail })=> {

    let newBorders = borders.map(b=>{
        
        let newBorder = data.filter(c=>c.alpha3Code===b)[0].name;

        return newBorder
    });
    



    return (
            
            <section className="sm:px-10 sm:w-full px-5 pb-10 text-sm font-semibold flex flex-col gap-10" style={{ color: mode==='dark'?'hsl(0, 0%, 100%)':'hsl(200, 15%, 8%)' }}>
                <button onClick={closeDetail} className={`relative h-12 w-32 hover:opacity-70 rounded-md ${mode}ModeElement font-semibold`}><span className="absolute left-3 top-3 w-6 h-6 inline-block bg-no-repeat bg-center bg-contain" style={{ backgroundImage: `url(${require(`../assets/icons/${mode}LeftArrowIcon.png`)})` }}/>Back</button>

                <section className="flex flex-col gap-8 sm:flex-row sm:items-center sm:w-full">
                    <img src={src} alt={name} className="sm:w-1/2" />
                    
                    <section className="flex flex-col gap-5 sm:w-1/2">
                        <section className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between sm:w-full">
                            <section className="flex flex-col gap-2">
                                <h3 className="text-base"><strong>{name}</strong></h3>
                                <div><strong>Native Name: </strong>{nativeName}</div>
                                <div><strong>Population: </strong>{population}</div>
                                <div><strong>Region: </strong>{region}</div>
                                <div><strong>Sub Region: </strong>{subregion}</div>
                                <div><strong>Capital: </strong>{capital}</div>

                            </section>

                            <section className="flex flex-col gap-2">

                                <div><strong>Top Level Domain: </strong>{topLevelDomain}</div>
                                <div><strong>Currencies: </strong>{currencies}</div>
                                <div><strong>Languages: </strong>{languages}</div>

                            </section>

                        </section>

                        <section className="flex flex-col gap-3">
                            <h3><strong>Border Countries: </strong></h3>
                            <section className="flex gap-3 flex-wrap">
                                {newBorders.map(b=><button onClick = {renderDetail} key={b}  id={b} className={`${mode}ModeElement text-xs rounded-md p-2 z-10 hover:opacity-70`}>{b}</button>)}
                                {newBorders.length===0&&'No Borders'}
                            </section>

                        </section>

                    </section>    

                </section>

            </section>



    )
}

export{ Detail };