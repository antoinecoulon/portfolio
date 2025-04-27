import { NavLink } from "react-router"
import { RiHome3Fill } from "react-icons/ri";
import './Navbar.css'

export default function Navbar() {
    return (
        <nav>
            <ul className='nav-list'>
                <li><NavLink to={"/"} className={({ isActive }) => isActive ? "active" : ""}>
                    <RiHome3Fill className="home" />
                </NavLink></li>
                <li><NavLink to={"/projects"} className={({ isActive }) => isActive ? "active" : ""}>Projets</NavLink></li>
                <li><NavLink to={"/skills"} className={({ isActive }) => isActive ? "active" : ""}>Compétences</NavLink></li>
                <li><NavLink to={"/parcours"} className={({ isActive }) => isActive ? "active" : ""}>Parcours</NavLink></li>
                <li><NavLink to={"/about"} className={({ isActive }) => isActive ? "active" : ""}>A propos</NavLink></li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}