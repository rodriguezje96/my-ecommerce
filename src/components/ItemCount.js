import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Link} from 'react-router-dom';


export const Counter = ({ max, setContador, contador, handleAgregar }) => {

    const incrementar = () => {
        if (contador < max) {
            setContador(contador + 1);
        }
    }
    const decrementar = () => {
        if (contador > 1) {
            setContador(contador - 1);
        }
    }



    return (
        <div className="container">
            <h3>Unidades</h3>
            <div className="container contador">
                <button className="btn btn-dark col-1 " onClick={incrementar}>+</button>
                <p className="">{contador}</p>
                <button className="btn btn-dark col-1" onClick={decrementar}>-</button>
                <hr />
                    <button className="btn btn-dark col-1" onClick={handleAgregar} >Agregar al carrito</button>
                    <Link to="./components/Cart/Cart.js" className="btn btn-dark col-1">Ir al carrito</Link>
            </div>

        </div>
    )

}