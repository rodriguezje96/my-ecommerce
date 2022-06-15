import {useContext} from 'react';
import {CartContext} from '../CartContext';


export const Cart = () => {

    const { cart, totalPrice } = useContext(CartContext);


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
                        </div>
                    )
                }

                )
            }
            <h4>Total: ${totalPrice()}</h4>
        </div>
    )

}