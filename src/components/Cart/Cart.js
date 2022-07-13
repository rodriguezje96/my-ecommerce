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
        <div className="container ticket">
            <h2>Tu Carrito</h2>

            {
                cart.map((item) => {
                    return (
                        <div>
                            <div className="cart-box" key={item?.id}>
                                <p className="cart-titulo">{item?.nombre}</p>
                                <p>Cantidad: {item?.cantidad}</p>
                                <p>Precio Total: ${+item?.precio * item?.cantidad}</p>
                                <button onClick={() => removeItem(item?.id)} className="btn btn-danger">Eliminar producto</button>
                            </div>
                        </div>

                    )
                }

                )
            }
            <h4>Total: ${totalPrice()}</h4>

            <div className="row">
            <Link to={'./Checkout'} className="btn btn-dark my-2 mx-auto col-3">Finalizar Pedido</Link>
            <button className="btn btn-danger my-2 mx-auto col-3" onClick={emptyCart}>Vaciar Carrito</button>
            </div>

        </div>
    )

}