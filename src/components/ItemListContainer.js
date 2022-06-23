import { useEffect } from 'react';
import { useState } from 'react';
import { ItemList } from './ItemList.js';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase/config'

export const ItemListContainer = () => {

    const [items, setItems] = useState([])
    const { categoria } = useParams();
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        setLoading(true);

        const productosRef = collection(db, 'productos')
        const q = categoria ? query(productosRef, where("categoria", "==", categoria)) : productosRef

        getDocs(q)
            .then((resp) => {
                const newItems = resp.docs.map ((doc) =>{
                    return {
                       id: doc.id,
                        ...doc.data()
                    }
                })
                setItems(newItems)
            })
            .finally (() => {
                setLoading(false)
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