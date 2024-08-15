import React from 'react';
import CartWidget from './CartWidget/CartWidget.jsx';
import { Link } from 'react-router-dom';


const Navbar = () => {

    return(

<header>
    <div className="container">
        <div className="logo"> 
                    <Link to="/Home">
                        M.G MADERA Y HIERRO 
                    </Link>
            
        </div>
            <nav id="navbar">
                <ul>
                    <li>
                    <Link to="/Home">
                        Home
                    </Link>
                    </li>
                    

                    <li>
                    <Link to="/Productos">
                        Productos
                    </Link>
                    </li>

                    <li>
                    <Link to="/Contacto">
                        Contacto
                    </Link>
                    </li>

                    <li><CartWidget /></li>
                </ul>
            
            
            </nav>
    </div>
</header>
    )
};

export default Navbar;