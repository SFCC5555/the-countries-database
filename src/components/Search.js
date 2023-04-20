const Search = ({mode, handleChange})=> {
    return (
        <div className="relative sm:w-1/3">
            <input onChange={handleChange} className={`w-full h-12 rounded-md ${mode}ModeElement pl-16 pr-4 placeholder:text-sm hover:opacity-80`} type='search' placeholder="Search for a country..." />
            <span className="absolute left-8 top-4 w-4 h-4 inline-block bg-no-repeat bg-center bg-contain" style={{ backgroundImage: `url(${require(`../assets/icons/${mode}SearchIcon.png`)})` }}/>
        </div>

    )
}

export { Search };