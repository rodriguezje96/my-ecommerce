import { Productos } from './productos.js'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ItemDetail } from './ItemDetail.js';


export const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)

    const [loading, setLoading] = useState(true)

    const pedirDatos = () => {

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Productos);
            }, 3000)
        })
    }

    const { itemId } = useParams();



    useEffect(() => {
        setLoading(true);

        pedirDatos()
            .then(res => {
                setItem(res.find((item) => item.id === Number(itemId)));
            })
            .catch(err => {
                console.log('ERROR', err)
            })
            .finally(() => {
                setLoading(false);
            })
            ;
    }, [])

    if (loading) {
        return <div>Cargando...</div>
    }

    return (
        <div>
            <ItemDetail item={item}></ItemDetail>
        </div>
    )
}
