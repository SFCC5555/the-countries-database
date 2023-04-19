const Filter = ({mode})=> {
    return (
        <button className={`relative text-left pl-5 filterButton h-12 rounded-md ${mode}Shadow bg-${mode}ModeElements text-${mode}ModeText`} style={{width:200}}>Filter by Region<span className="absolute right-5 top-5 w-2 h-2 inline-block bg-no-repeat bg-center bg-contain" style={{ backgroundImage: `url(${require(`../assets/icons/${mode}DownArrowIcon.png`)})` }}/></button>
    )
}

export { Filter };