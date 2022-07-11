import { useState, useContext } from "react"
import { CartContext } from './CartContext.js'
import { Navigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore"
import { db } from '../firebase/config.js';
import { Formik } from 'formik';
import * as Yup from 'yup';

const schema = Yup.object({
    nombre: Yup.string()
             .required('Este campo es obligatorio')
             .min(4, 'El nombre es demasiado corto')
             .max(30, 'Maximo 30 caracteres'),
    email: Yup.string()
            .required('Este campo es obligatorio')
            .email('No parece un mail real'),
    direccion: Yup.string()
            .required('Este campo es obligatorio')
            .min(4, 'La direccion es demasiado corta')
            .max(30, 'Maximo 30 caracteres')       
}).shape

export const Checkout = () => {
    const { cart, totalPrice, emptyCart } = useContext(CartContext);

    const [orderId, setOrderId] = useState(null)


    const createOrder = async (values) => {

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
            <div>
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
        <div className="container">

            <h2>Checkout</h2>

            <Formik initialValues={{
                nombre: "",
                email: "",
                direccion: ""
            }}
                onSubmit={createOrder}
                validationSchema={schema}
            >
                {(formik) => (
                    <form onSubmit={formik.handleSubmit}>
                        <input
                            value={formik.values.nombre}
                            name="nombre"
                            onChange={formik.handleChange}
                            type={"text"}
                            placeholder="Juan Perez"
                            className="form-control my-2">
                        </input>
                        {formik.errors.nombre && <p className="alert alert-danger">{formik.errors.nombre}</p>}

                        <input
                            value={formik.values.email}
                            name="email"
                            onChange={formik.handleChange}
                            type={"email"}
                            placeholder="tumail@gmail.com"
                            className="form-control my-2">
                        </input>
                        {formik.errors.email && <p className="alert alert-danger">{formik.errors.email}</p>}

                        <input
                            value={formik.values.telefono}
                            name="telefono"
                            onChange={formik.handleChange}
                            type={"number"}
                            placeholder="1122334455"
                            className="form-control my-2">
                        </input>
                        {formik.errors.telefono && <p className="alert alert-danger">{formik.errors.telefono}</p>}


                        <button onClick={handleSubmit} type="submit" className="btn btn-dark my-2">Enviar</button>
                    </form>
                )}
            </Formik>


            <button onClick={emptyCart} className="btn btn-danger">Cancelar Compra</button>

        </div>
    )
}