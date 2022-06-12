import { Counter } from '../components/ItemCount';
import { useState } from 'react';


export const ItemDetail = ({ item }) => {

    const [cantidad, setCantidad] = useState(1);

    const handleAgregar = () => {
       const itemToCart = {
            ...item,
           cantidad
        }
        console.log(itemToCart);
    }

    return (
        <div>
            <div className="container">
                <div className="card container">
                    <img className="card-img-top" src={item?.img} alt={item?.nombre}></img>
                    <div className="card-body">
                        <h5 className="card-title">{item?.nombre}</h5>
                        <p className="card-text">Precio: {item?.precio}</p>
                    </div>
                </div>
            </div>
            <Counter max={item?.stock} contador={cantidad} setContador={setCantidad} handleAgregar={handleAgregar}></Counter>
        </div>
    )
}