import './style.css';
import Navbar from './components/NavBar.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemListContainer } from './components/ItemListContainer';
import {Counter} from './components/ItemCount';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar></Navbar>
        <br />
        <ItemListContainer titulo="Bienvenido" content="Acá vas a encontrar nuestros productos destacados"></ItemListContainer>
        <br />
        <Counter></Counter>
        <br />
        <footer>
          José Rodríguez. Quinto desafío de React.
        </footer>
      </header>
    </div>
  );
}

export default App;
