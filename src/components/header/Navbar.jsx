import { NavLink } from "react-router"

function Navbar() {
    return (
        <nav>
            <ul className='flex gap-4'>
                <li><NavLink to={"/"} className={({ isActive }) => isActive ? "active" : ""}>Accueil</NavLink></li>
                <li>Projets</li>
                <li><NavLink to={"/skills"} className={({ isActive }) => isActive ? "active" : ""}>Compétences</NavLink></li>
                <li>Parcours</li>
                <li><NavLink to={"/about"} className={({ isActive }) => isActive ? "active" : ""}>A propos</NavLink></li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}

export default Navbar