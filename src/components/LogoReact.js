import logo from '../logo.svg'
import '../styles/LogoReact.css'

const LogoReact = () => {
    return (
    <div className="fixed text-center text-gray-500 flex items-center bottom-8 right-8">
        <p className="text-base" >Powered by React.</p>
        <img src={logo} className="reactLogo cursor-crosshair h-16" alt="logo" />
    </div>)
}

export { LogoReact };