import { useContext } from 'react';
import { CartContext } from '../CartContext';
import { Link } from 'react-router-dom';



export const Cart = () => {

    const { cart, totalPrice, emptyCart, removeItem } = useContext(CartContext);

    if (cart.length === 0) {
        return <div>
            <h2>Tu carrito todavia esta vacio!</h2>
            <Link to="/" className="btn btn-dark">Buscar productos</Link>

        </div>

    }

    return (
        <div>
            <h2>Tu Carrito</h2>

            {
                cart.map((item) => {
                    console.log(item)
                    return (
                        <div key={item?.id}>
                            <p>{item?.nombre}</p>
                            <p>Cantidad: {item?.cantidad}</p>
                            <p>Precio Total: {+item?.precio * item?.cantidad}</p>
                            <button onClick={() => removeItem(item?.id)} className="btn btn-danger">Eliminar producto</button>
                        </div>
                    )
                }

                )
            }
            <h4>Total: ${totalPrice()}</h4>
            <button className="btn btn-danger" onClick={emptyCart}>Vaciar Carrito</button>
        </div>
    )

}