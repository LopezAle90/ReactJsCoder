import { CartWidget } from "./CartWidget"

export const NavBar = () => {
    return <div className="navBar">
        <h1>EIYU Tienda Virtual</h1>
        <ul>
            <li><a href="#">Productos</a></li>
            <li><a href="#">Promos</a></li>
            <li><a href="#">Contactanos</a></li>
        </ul>

        <CartWidget />
    </div>
}

