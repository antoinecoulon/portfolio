import Navbar from "./Navbar"
import logo from "../../assets/logo.png"
import './Header.css'

function Header() {
    return (
        <header className="header">
            <div className="logo-block">
                <img src={logo} className="logo" alt="Logo temporaire" />
                <h1>Portfolio d'Antoine COULON</h1>
            </div>
            <Navbar className="navbar" />
        </header>
    )
}

export default Header