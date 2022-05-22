import logo from './logo.svg';
import './App.css';
import Navbar from './components/NavBar.js';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar></Navbar>
        <br />
        <p>
          José Rodríguez. Segundo desafío de React.
        </p>
      </header>
    </div>
  );
}

export default App;
