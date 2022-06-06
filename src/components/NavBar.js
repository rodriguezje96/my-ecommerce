import CartWidget from './CartWidget';
import '../style.css';
import {Link} from 'react-router-dom';


const NavBar = () => {
    return (

        <nav class="navbar navbar-expand-lg bg-black">
            <div class="container-fluid">
                <CartWidget></CartWidget>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link to="/" class="nav-link">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/Categoria/Remeras" className="nav-link">Remeras</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/Categoria/Hoodies" className="nav-link">Hoodies</Link>
                        </li> <li class="nav-item">
                            <Link to="/Categoria/Shorts" class="nav-link">Shorts</Link>
                        </li> <li class="nav-item">
                            <Link to="/Contacto" className="nav-link">Contacto</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;