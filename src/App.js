import './style.css';
import Navbar from './components/NavBar.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemListContainer } from './components/ItemListContainer';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar></Navbar>
        <br />
        <ItemListContainer titulo="Bienvenido" content="Acá vas a encontrar nuestros productos destacados"></ItemListContainer>
        <footer>
          José Rodríguez. Tercer desafío de React.
        </footer>
      </header>
    </div>
  );
}

export default App;
