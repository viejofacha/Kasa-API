import React from 'react'; // eslint-disable-line no-unused-vars
import { NavLink } from "react-router-dom";
import Logo from "../../assets/LOGO.svg";
import "../../layout/header/header.css"
// Composant d'en-tête: en-tête avec logo et navigation entre les sections
function Header() {
    return (
        <header>
            <NavLink to={`/`}>
                <img className="logo" src={Logo} alt="Logo de Kasa" />
            </NavLink>

            <nav className="navbar__links">

                <NavLink to={`/`} className={({ isActive, isPending }) => 
                isPending ? "pending" : isActive ? "active" : ""}>
                    Accueil
                </NavLink>

                <NavLink to={`/about`} className={({ isActive, isPending }) => 
                isPending ? "pending" : isActive ? "active" : ""}>
                    A Propos
                </NavLink>
            </nav>

        </header>
    );
};

export default Header;