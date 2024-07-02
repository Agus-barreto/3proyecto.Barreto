import React from 'react';
import CartWidget from './CartWidget';
import './Navbar.css';

const Navbar = () => {

    return(
    <header>
        <div className="container">
        <nav id="navbar">
            
                <div className="logo">M.G Muebles Industriales</div>
                
                <ul>
                    <li>
                        <a href='#'>Home</a>
                    </li>

                    <li>
                        <a href='#'>Productos</a>
                    </li>

                    <li>
                        <a href='#'>Contacto</a>
                    </li>
            </ul>
            <cartWidget />
            </nav>
        </div>
    </header>
    )
};

export default Navbar;