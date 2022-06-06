import './style.css';
import Navbar from './components/NavBar.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemListContainer } from './components/ItemListContainer';
import { Counter } from './components/ItemCount';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contacto from './components/Contacto/Contacto.js';
import Error from './components/Error/Error.js';



function App() {
  return (

    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Navbar></Navbar>
          <Routes>
            <Route path="/" element={<ItemListContainer></ItemListContainer>}></Route>
            <Route path="/Productos/:categoria" element={<ItemListContainer></ItemListContainer>}></Route>
            <Route path="/Contacto" element={<Contacto></Contacto>}></Route>
            <Route path="*" element={<Error></Error>}></Route>
          </Routes>
          <Counter></Counter>
          <br />
          <footer>
            José Rodríguez. Quinto desafío de React.
          </footer>
        </header>
      </div>

    </BrowserRouter>

  );
}

export default App;
