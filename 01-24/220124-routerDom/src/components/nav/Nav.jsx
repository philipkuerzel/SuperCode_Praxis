import {NavLink } from "react-router-dom";
import "./nav.css"

const Nav = () => {

    return ( 
        <>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/Speisekarte">Speisekarte</NavLink>
                <NavLink to="/Kontakt">Kontakt</NavLink>
                <NavLink to="/Oeffnungszeiten">Öffnungszeiten</NavLink>
                <NavLink to="/Galerie">Galerie</NavLink>
            </nav>
        </>
    );
}

export default Nav;