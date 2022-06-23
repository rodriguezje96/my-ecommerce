import { useEffect } from 'react';
import { useState } from 'react';
import { ItemList } from './ItemList.js';
import { useParams } from 'react-router-dom';
import { colletion, getDocs } from 'firebase/firestore';
import { db } from '../firebase/config'

export const ItemListContainer = () => {

    const [items, setItems] = useState([])
    const { categoria } = useParams();
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        setLoading(true);

        const productosRef = collection(db, 'productos')

        getDocs(productosRef)
            .then((resp) => {
                console.log(resp.docs)
            })

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