import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);


    const addItem = (item) => {
        setCart([...cart, item]);
    }

    const isInCart = (id) => {
        return cart.some(item => item.id === id);
    }

    const totalPrice = () => {
        return cart.reduce((acc, prod) => acc += (prod?.precio * prod?.cantidad), 0);
    }

    const totalQuantity = () => {
        return cart.reduce((acc, prod) => acc += prod?.cantidad, 0);
    }

    const emptyCart = () => {
        setCart([]);
    }

    const removeItem = (id) => {
        setCart(cart.filter(item => item.id !== id));
    }
    return (
        <CartContext.Provider value={{ cart, addItem, isInCart, totalPrice, totalQuantity, emptyCart, removeItem }} >
            {children}
        </CartContext.Provider>
    )
}