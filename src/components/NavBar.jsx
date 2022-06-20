import CartWidget from "./CartWidget";
import ImagenNav from "./ImagenNav";
import { Link } from "react-router-dom";

function NavBar() {
    return <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/"> <ImagenNav /> </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02"
                aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"> </span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/">INICIO</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Nosotros" >NOSOTROS</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Novedades" >NOVEDADES</Link>
                    </li>
                    <li className="nav-item dropdown">  

                        <Link to="*" className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">PRODUCTOS</Link>

                        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li>
                                <Link to="/categoria/armado" className="dropdown-item">ARMADO</Link>
                            </li>
                            <li>
                                <Link to="/categoria/accesorio" className="dropdown-item">ACCESORIO</Link>
                            </li>

                            <li>
                                <hr className="dropdown-divider" />
                            </li>
                            <li>
                                <Link to="/productos" className="dropdown-item">TODOS LOS PRODUCTOS</Link>
                            </li>
                        </ul>
                    </li>


                    <li className="nav-item">
                        <Link className="nav-link" to="/Contacto" >CONTACTO</Link>
                    </li>
                </ul>
                <CartWidget />
            </div>
        </div>
    </nav>
}

export default NavBar;
