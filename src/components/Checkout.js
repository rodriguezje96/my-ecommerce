import { useState, useContext } from "react"
import { CartContext } from './CartContext.js'
import { Navigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore"
import { db } from '../firebase/config.js';

export const Checkout = () => {
    const { cart, totalPrice, emptyCart } = useContext(CartContext);

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
            items: cart?.map(({ id, cantidad, nombre, precio }) => ({ id, cantidad, nombre, precio })),
            total: totalPrice()
        }
        const ordersRef = collection(db, "orders")
        addDoc(ordersRef, orden)
            .then((doc) => {
                setOrderId(doc.id)
                emptyCart()

            })
    }

    if (orderId) {
        return (
            <div className="orden-box">
                <h2>Gracias por su compra!</h2>
                <p>Su código de orden es: {orderId}</p>

            </div>
        )
    }

    if (cart?.length === 0) {
        return (
            <Navigate to="./"></Navigate>
        )
    }
    return (

        <div className="container form-checkout">
            <form className="row my-2" onSubmit={handleSubmit}>
                <input
                    value={values.nombre}
                    name="nombre"
                    onChange={handleInputChange}
                    type={"text"}
                    placeholder="Juan Perez"
                    className="form-control my-2">
                </input>
                <input
                    value={values.email}
                    name="email"
                    onChange={handleInputChange}
                    type={"email"}
                    placeholder="tumail@gmail.com"
                    className="form-control my-2">
                </input>
                <input
                    value={values.telefono}
                    name="telefono"
                    onChange={handleInputChange}
                    type={"number"}
                    placeholder="1122334455"
                    className="form-control my-2">
                </input>

                <button onClick={handleSubmit} type="submit" className="btn btn-dark my-2 mx-auto col-3">Enviar</button>
                <button onClick={emptyCart} className="btn btn-danger my-2 mx-auto col-3">Cancelar Compra</button>

                <h5 className="form-checkout-title my-3">Ingresa tus datos para finalizar la compra</h5>

            </form>

        </div>
    )
}