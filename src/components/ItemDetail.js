import { Counter } from '../components/ItemCount';
import { useContext, useState } from 'react';
import { CartContext } from './CartContext.js';
import { Link } from 'react-router-dom';


export const ItemDetail = ({ item }) => {

    const { addItem, isInCart } = useContext(CartContext);


    const [cantidad, setCantidad] = useState(1);

    const handleAgregar = () => {
        const itemToCart = {
            ...item,
            cantidad
        }
        addItem(itemToCart);
    }

    return (
        <div>
            <div className="col-4 my-2">
                <div className="card container my-2 mx-auto">
                    <img className="card-img-top" src={item?.img} alt={item?.nombre}></img>
                    <div className="card-body">
                        <h5 className="card-title">{item?.nombre}</h5>
                        <p className="card-text">Precio: {item?.precio}</p>
                    </div>
                </div>
            </div>
            {
                isInCart(item?.id) ?
                    <Link to={'/Cart'} className="btn btn-dark">Terminar mi compra</Link>
                    :
                    <Counter max={item?.stock}
                        contador={cantidad}
                        setContador={setCantidad}
                        handleAgregar={handleAgregar}></Counter>

            }

        </div>
    )
}