import { useState } from "react";
import { NavLink } from "react-router";
import { RiHome3Fill } from "react-icons/ri";
import "./Navbar.css";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <nav>
      <div className="hamburger" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <ul className={`nav-list ${isMenuOpen ? "active" : ""}`}>
        {isMenuOpen && (
          <div className="close-menu" onClick={toggleMenu}>
            <div></div>
          </div>
        )}

        <li>
          <NavLink
            to={"/"}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <RiHome3Fill className="home" />
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/projects"}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Projets
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/skills"}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Compétences
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/parcours"}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Parcours
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/about"}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            A propos
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/contact"}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
