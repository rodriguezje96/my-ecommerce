import { Productos } from './productos.js'
import { useEffect } from 'react';
import { useState } from 'react';
import { ItemList } from './ItemList.js';
import { useParams } from 'react-router-dom';


export const ItemListContainer = () => {

    const [items, setItems] = useState([])
    const { categoria } = useParams();
    const [loading, setLoading] = useState(true)

    const pedirDatos = () => {

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Productos);
            }, 3000)
        })
    }

    useEffect(() => {
        setLoading(true);

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
            })
            .finally(() => {
                setLoading(false);
            })
            ;
    }, [categoria])

    if (loading) {
        return <div>Cargando...</div>
    }

    return (
        <div className="row">
            <ItemList items={items}></ItemList>
        </div>
    )

}