import { Link } from 'react-router-dom';

export const Item = ({ item }) => {
    return (
        <div>
            <div>
                <div className="card">
                    <img className="card-img-top" src={item.img} alt="imagen de producto"></img>
                    <div className="card-body">
                        <h5 className="card-title">{item.nombre}</h5>
                        <p className="card-text">Precio: {item.precio}</p>
                        <Link to={`/item/${item.id}`}>
                            <button className="btn btn-dark">Ver más</button>
                        </Link>
                    </div>
                </div>
            </div>

        </div>

    )


}