import { Outlet, Link } from "react-router-dom"

function Layout({cart}) {
    return (
        <div>
        <nav className="brown darken-1">
            <div class="nav-wrapper container">
            <a class="brand-logo">NT Tectudo  </a>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li>
                    <Link to="/">Catalogo</Link>
                </li>
                <li>
                    <Link to="/carrinho">
                        Carrinho
                        {cart.length == 0 ? 
                        <span></span>
                        : 
                        <span className="badge red" data-badge-caption={cart.length == 1 ? "item" : "itens"}>{cart.length}</span>
                        }
                    </Link>
                </li>
            </ul>
            </div>
        </nav>
        <Outlet />
        </div>
    )
} export default Layout