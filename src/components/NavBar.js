import 'bootstrap/dist/css/bootstrap.min.css';
import  CartWidget from './CartWidget';
import '../style.css';

const NavBar = () => {
    return (

        <nav class="navbar navbar-expand-lg bg-black">
            <div class="container-fluid">
                <CartWidget></CartWidget>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link" href="#">Remeras</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Hoodies</a>
                        </li> <li class="nav-item">
                            <a class="nav-link" href="#">Shorts</a>
                        </li> <li class="nav-item">
                            <a class="nav-link" href="#">Contacto</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;