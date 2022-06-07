import { useNavigate } from "react-router-dom"
import { Counter } from '../components/ItemCount';


export const ItemDetail = ({ item }) => {

    const navigate = useNavigate();

    const handleVolver = () => {
        navigate(-1);
    }


    return (
        <div>
            <button className="btn btn-dark" onclick={handleVolver}>Volver</button>
            <div className="container">
                <div className="card container">
                    <img className="card-img-top" src={item?.img} alt={item?.nombre}></img>
                    <div className="card-body">
                        <h5 className="card-title">{item?.nombre}</h5>
                        <p className="card-text">Precio: {item?.precio}</p>
                    </div>
                </div>
            </div>
            <Counter></Counter>
        </div>
    )
}