import CartLogo from './CartLogo';
import CartWidget from './CartWidget';
import '../style.css';
import { Link } from 'react-router-dom';


const NavBar = () => {
    return (

        <nav className="navbar navbar-expand-lg bg-black">
            <div className="container-fluid">
                <CartLogo></CartLogo>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/Productos/remeras" className="nav-link">Remeras</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/Productos/hoodies" className="nav-link">Hoodies</Link>
                        </li> <li class="nav-item">
                            <Link to="/Productos/shorts" class="nav-link">Shorts</Link>
                        </li> <li class="nav-item">
                            <Link to="/Contacto" className="nav-link">Contacto</Link>
                        </li>
                            <CartWidget></CartWidget>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;