import CartWidget from "./CartWidget";

function NavBar() {
    return  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
        <a class="navbar-brand" href="index.html"><img src=".../img/textotitulo.png" width="100" height="40"></img></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"> </span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="index.html">INICIO</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" >NOSOTROS</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" >NOVEDADES</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" >PRODUCTOS</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" >CONTACTO</a>
                </li>
            </ul>
            <CartWidget />
        </div>
    </div>
</nav>
  }
  
  export default NavBar;
  