import Navbar from "./Navbar"
import logo from "../../assets/logo-temp.svg"

function Header() {
    return (
        <header className="w-full flex justify-between items-center p-4 shadow-[0_3px_10px_rgb(0,0,0,0.3)]">
            <div className="logo-block flex items-center gap-4">
                <img src={logo} className="w-[80px]" alt="Logo temporaire" />
                <h1>Portfolio d'Antoine COULON</h1>
            </div>
            <Navbar />
        </header>
    )
}

export default Header