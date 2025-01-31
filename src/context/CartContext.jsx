import { createContext, useEffect, useState } from "react";


export const CartContext = createContext();

const carritoInicial = JSON.parse(localStorage.getItem("carrito")) || [];

export const CartProvider = ({children}) => {

    const [carrito, setcarrito] = useState(carritoInicial);

    const agregarAlCarrito = (item, cantidad) => {
        const itemAgregado = { ...item, cantidad };

        const nuevoCarrito = [...carrito]

        const estaEnElCarrito = nuevoCarrito.find((producto) => producto.id === itemAgregado.id);


        if (estaEnElCarrito) {
            estaEnElCarrito.cantidad += cantidad;
            setcarrito(nuevoCarrito)
        } else {
            nuevoCarrito.push(itemAgregado)
        }
        setcarrito(nuevoCarrito)
    }

    const cantidadEnCarrito = () => {
        return carrito.reduce((acc, prod) => acc + prod.cantidad, 0);
    }

    const precioTotal = () => {
        return carrito.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0);
    }

    const vaciarCarrito = () => {
        setcarrito([]);
    }

    useEffect(() => {
        localStorage.setItem("carrito", JSON.stringify(carrito));
    }, [carrito])


    return (
        <CartContext.Provider value={{ carrito, agregarAlCarrito, cantidadEnCarrito, precioTotal, vaciarCarrito }}>
        {children}
        </CartContext.Provider>
    )
}
