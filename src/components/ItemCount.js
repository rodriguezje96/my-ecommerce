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
                <button className={contador === max ? "btn btn-secondary col-1" : "btn btn-dark col-1 "} onClick={incrementar}>+</button>
                <p className="">{contador}</p>
                <button className={contador === 1 ? "btn btn-secondary col-1" : "btn btn-dark col-1 "} onClick={decrementar}>-</button>
                <hr />
                    <button className="btn btn-dark col-1" onClick={handleAgregar} >Agregar al carrito</button>
            </div>

        </div>
    )

}