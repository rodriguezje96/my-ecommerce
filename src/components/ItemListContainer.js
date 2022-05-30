import { Productos } from './productos.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import { useState } from 'react';
import { ItemList } from './ItemList.js';

export const ItemListContainer = () => {

    const [items, setItems] = useState([])
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
        <div>
            <ItemList items={items}></ItemList>
        </div>
    )

}