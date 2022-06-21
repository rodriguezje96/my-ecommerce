import { BsFillCartFill } from 'react-icons/bs'
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';
import { useContext } from 'react';

const CartWidget = () => {

    const { cart, totalQuantity } = useContext(CartContext);

    return (
        <Link to="/Cart" className={`widget ${totalQuantity() === 0 ? 'widget-hidden' : ''}`}>
            <BsFillCartFill></BsFillCartFill>
            <span>{totalQuantity()}</span>
        </Link>
    )
}

export default CartWidget;