import { Productos } from './productos.js'
import { useEffect } from 'react';
import { useState } from 'react';
import { ItemList } from './ItemList.js';
import { useParams } from 'react-router-dom';


export const ItemListContainer = () => {

    const [items, setItems] = useState([])
    //const Params = useParams();
    const { categoria } = useParams();
    console.log(categoria);



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
                if (!categoria) {
                setItems(res); 
                } else {
                    setItems(res.filter(item => item.categoria === categoria));
                }
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