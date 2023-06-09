const CountrieCard = ({ mode, src, name, population, region, capital, renderDetail }) => {
    return (<section onClick = {renderDetail} className={`relative w-full pb-5 sm:w-52 text-sm overflow-hidden cursor-pointer hover:opacity-80 hover:scale-105 flex flex-col gap-6 rounded-lg ${mode}ModeElement`}>
                <img src={src} alt={name} />
                <section className="flex flex-col gap-2 px-5 font-semibold">
                    <h3 className="text-base"><strong>{name}</strong></h3>
                    <p><strong>Population: </strong>{population}</p>
                    <p><strong>Region: </strong>{region}</p>
                    <p><strong>Capital: </strong>{capital}</p>
                </section>
                <div id = {name} className="absolute z-10 w-full h-full"></div>

            </section>
    );
}

export { CountrieCard }