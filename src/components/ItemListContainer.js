import { Productos } from './productos.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import { useState } from 'react';

export const ItemListContainer = () => {

    const [items, setItems] = useState([])

    console.log(items.map((el) => el.nombre));

    const pedirDatos = () => {

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Productos);
            }, 3000)
        })
    }

    useEffect(() => {

        pedirDatos()
            .then(res => {
                setItems(res);
            })
            .catch(err => {
                console.log('ERROR', err)
            });
    }, [])

    return (
        <div className="container">
            <h2>Productos Destacados</h2>

            {
                items.map((item) => (
                    <div class="card">
                        <img class="card-img-top" src={item.img} alt="imagen de producto"></img>
                        <div class="card-body">
                            <h5 class="card-title">{item.nombre}</h5>
                            <p class="card-text">Precio: {item.precio}</p>
                            <a href="#" class="btn btn-dark">Sumar al carrito</a>
                        </div>
                    </div>
                ))
            }

        </div>
    )

}