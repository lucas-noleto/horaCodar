
import './App.css';
import HelloWorld from './components/HelloWorld.js';
import Pessoa  from './components/Pessoa.js';

function App() {
  
  return (
    <div className="App">
      <HelloWorld />
      <Pessoa nome = "Lucas" profissao="Engenheiro de Computação" idade = "29" foto = "https://via.placeholder.com/150"/>
    </div>
  );
}

export default App;
