const NavBar = ({ mode,handleMode })=> {


    return (
        <nav className={`w-full h-16 flex items-center justify-between px-5 py-0 mb-5 ${mode}ModeElement sm:px-10`}>
            <div className="font-bold">Where in the world?</div>
            <div className="cursor-pointer text-sm font-semibold flex justify-between items-center hover:opacity-70" onClick={handleMode}><span className="w-4 h-4 inline-block bg-no-repeat bg-center bg-contain mr-2" style={{ backgroundImage: `url(${require(`../assets/icons/${mode}ModeIcon.png`)})` }}/>Dark Mode</div>
        </nav>
    )


}

export { NavBar };