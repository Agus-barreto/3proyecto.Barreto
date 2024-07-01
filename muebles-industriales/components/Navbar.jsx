

const Navbar = () => {

    return(
        <div className="container">
        <nav id="navbar">
            
                <div className="logo">M.G Muebles Industriales</div>
                <ul>
                    <li>
                        <a>Home</a>
                    </li>

                    <li>
                        <a>Productos</a>
                    </li>

                    <li>
                        <a>Contacto</a>
                    </li>
            </ul>
            
            <cartWidget />
            
            </nav>
        </div>
    )
};

export default Navbar;