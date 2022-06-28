import { useState } from "react"
import { CartContext } from './CartContext.js'
import { Link } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore"
import { db } from '../firebase/config.js';

export const Checkout = () => {

    const { cart, totalPrice, emptyCart } = CartContext();

    const [orderId, setOrderId] = useState(null)
    const [values, setValues] = useState({
        nombre: '',
        email: '',
        telefono: ''
    })

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (values.nombre.length < 5) {
            alert("Ingresa tu nombre completo")
            return
        }
        if (values.email.length < 5) {
            alert("El email es invalido")
            return
        }
        if (values.telefono.length < 5) {
            alert("Parece que faltan numeros")
            return
        }


        const orden = {
            buyer: values,
            items: cart.map(({ id, cantidad, nombre, precio }) => ({ id, cantidad, nombre, precio })),
            total: totalPrice()
        }
        const ordersRef = collection(db, "orders")
        addDoc(ordersRef, orden)
            .then((doc) => {
                console.log(doc.id)

                emptyCart()
            })
    }

    if (orderId) {
        return (
            <div>
                <h2>Gracias por su compra!</h2>
                <p>Su código de orden es: {orderId}</p>
            </div>
        )
    }

    if (cart.length === 0) {
        return (
            <Link to="./"></Link>
        )
    }
    return (
        <div className="container">
            <h2>Checkout</h2>

            <form onSubmit={handleSubmit}>
                <input
                    value={values.nombre}
                    name="nombre"
                    onChange={handleInputChange}
                    type={"text"}
                    placeholder="Juan Perez">
                </input>
                <input
                    value={values.email}
                    name="nombre"
                    onChange={handleInputChange}
                    type={"text"}
                    placeholder="tumail@gmail.com">
                </input>
                <input
                    value={values.telefono}
                    name="nombre"
                    onChange={handleInputChange}
                    type={"number"}
                    placeholder="1122334455">
                </input>

                <button type="submit" className="btn btn-dark">Enviar</button>
            </form>
            <button onClick={emptyCart} className="btn btn-danger">Cancelar Compra</button>

        </div>
    )
}