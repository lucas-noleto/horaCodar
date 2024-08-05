
import './App.css';
import HelloWorld from './components/HelloWorld.js';
import Pessoa  from './components/Pessoa.js';
import Evento from './components/Evento.js';
import Formulario from './components/Formulario.js';

function App() {
  
  return (
    <div className="App">
      <HelloWorld />
      <Pessoa nome = "Lucas" profissao="Engenheiro de Computação" idade = "29" foto = "https://via.placeholder.com/150"/>

      <h2>Testando Eventos</h2>
      <Evento/>

      <Formulario />
    </div>
  );
}

export default App;
