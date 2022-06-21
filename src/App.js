import './style.css';
import Navbar from './components/NavBar.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemListContainer } from './components/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailsContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Error } from './components/Error/Error.js';
import { Contacto } from './components/Contacto/Contacto.js';
import { CartContext } from './components/CartContext.js';
import { useContext, useState } from 'react';
import { Cart } from './components/Cart/Cart.js';



function App() {

  const [cart, setCart] = useState([]);


  const addItem = (item) => {
    setCart([...cart, item]);
  }

  const isInCart = (id) => {
    return cart.some(item => item.id === id);
  }

  const totalPrice = () => {
    return cart.reduce((acc, prod) => acc += (prod?.precio * prod?.cantidad), 0);
  }

  const totalQuantity = () => {
    return cart.reduce((acc, prod) => acc += prod?.cantidad, 0);
  }

  const emptyCart = () => {
    setCart( [] );
  }

  const removeItem = (id) => {
    setCart(cart.filter(item => item.id !== id));
  }

  return (

    <CartContext.Provider value={{ cart, addItem, isInCart, totalPrice, totalQuantity, emptyCart, removeItem }} >

      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <Navbar></Navbar>
            <Routes>
              <Route path="/" element={<ItemListContainer></ItemListContainer>}></Route>
              <Route path="/Productos/:categoria" element={<ItemListContainer></ItemListContainer>}></Route>
              <Route path="/item/:itemId" element={<ItemDetailContainer></ItemDetailContainer>}></Route>
              <Route path="/Cart" element={<Cart></Cart>}></Route>
              <Route path="/Contacto" element={<Contacto></Contacto>}></Route>
              <Route path="*" element={<Error></Error>}></Route>
            </Routes>
            <br />
            <footer>
              José Rodríguez. Primera entrega de React.
            </footer>
          </header>
        </div>

      </BrowserRouter>
    </CartContext.Provider>
  );
}

export default App;
