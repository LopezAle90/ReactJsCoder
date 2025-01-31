import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const Carrito = () => {

    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext)
    const handleVaciar = () => {
        vaciarCarrito()
    } 

    return (
        <div className='container'>
            <h1 className='main-title'>Carrito</h1>

            {
                carrito.map((prod) => (
                    <div key={prod.div}>
                        <br />
                        <h3>{prod.titulo}</h3>
                        <p>Precio Unit: ${prod.precio}</p>
                        <p>Cant: {prod.cantidad}</p> 
                        <p>Precio Total: ${prod.precio * prod.cantidad}</p>
                        <br />
                    </div>
                ))
            }

            <h2>Precio Total: ${precioTotal()}</h2>

            <button onClick={handleVaciar}>Vaciar Carrito</button>

        </div>
    )
}

export default Carrito