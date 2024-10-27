
import { Children } from 'react';
import '../styles/Navbar.css';
import CartWidget from './CartWidget'


const Navbar = () => {
    return (
        <>
         <nav className="navbar">
            <div className="logo">
                <img src="src/assets/CourtMaster_transparent-.png" alt="CourtMaster Logo" />
            </div>
            <ul className="nav-links">
                <li><a href="#home">Bolsos</a></li>
                <li><a href="#about">Remeras</a></li>
                <li><a href="#contact">Paletas</a></li>
            </ul>
            <div><CartWidget /></div>
        </nav>
        
        </>
    );
        
       
};

export default Navbar;