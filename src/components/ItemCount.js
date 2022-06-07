import { useState } from 'react';


export const Counter = () => {

    let [contador, setContador] = useState(1);

    const incrementar = () => {
        if (contador < 10) {
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
            </div>

        </div>
    )

}