import './style.css';
import Navbar from './components/NavBar.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemListContainer } from './components/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailsContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Error } from './components/Error/Error.js';
import { CartProvider } from './components/CartContext.js';
import { Cart } from './components/Cart/Cart.js';
import { Checkout } from './components/Checkout.js'



function App() {



  return (
    <CartProvider>
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <Navbar></Navbar>
            <Routes>
              <Route path="/" element={<ItemListContainer></ItemListContainer>}></Route>
              <Route path="/Productos/:categoria" element={<ItemListContainer></ItemListContainer>}></Route>
              <Route path="/item/:itemId" element={<ItemDetailContainer></ItemDetailContainer>}></Route>
              <Route path="/Cart" element={<Cart></Cart>}></Route>
              <Route path="/Cart/Checkout" element={<Checkout></Checkout>}></Route>
              <Route path="*" element={<Error></Error>}></Route>
            </Routes>
            <br />
            <footer>
              José Rodríguez. Desafío Firebase II.
            </footer>
          </header>
        </div>

      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
