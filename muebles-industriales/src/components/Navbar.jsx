
import { Link } from 'react-router-dom';
import CartWidget from '../components/CartWidget/CartWidget' 

const Navbar = () => {

    return(

<header>
    <div className="container">
        <div className="logo"> 
                    <Link to="/Home">
                        M.G Muebles Industriales   
                    </Link>
            
        </div>
            <nav id="navbar">
                <ul>
                    <li>
                    <Link to="/Home">
                        <a className="item-text">Home</a>
                    </Link>
                    </li>
                    

                    <li>
                    <Link to="/Productos">
                        <a className="item-text">Productos</a>
                    </Link>
                    </li>

                    <li>
                    <Link to="/Contacto">
                        <a className="item-text">Contacto</a>
                    </Link>
                    </li>
                </ul>
            
            <CartWidget />
            
            </nav>
    </div>
</header>
    )
};

export default Navbar;