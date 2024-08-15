
import './App.css';
import HelloWorld from './components/HelloWorld.js';
import Pessoa  from './components/Pessoa.js';
import Evento from './components/Evento.js';
import Formulario from './components/Formulario.js';
import Condicional from './components/Condicional.js';
import RenderLista from './components/RenderListas.js'
import { useState } from 'react';
import SeuNome from './components/SeuNome.js';
import Saudacao from './components/Saudacao.js';

function App() {
  const [nome,setNome] =  useState()
  const lista = ['React', 'Json','HTML']

  return (
    <div className="App">
      <HelloWorld />
      <Pessoa nome = "Lucas" profissao="Engenheiro de Computação" idade = "29" foto = "https://via.placeholder.com/150"/>

      <h2>Testando Eventos</h2>
      <Evento/>

      <Formulario />

      <h1>Renderizacao Condicional</h1>
      <Condicional/>

      <h1>Renderizacao de listas</h1>
      <RenderLista listas = {lista} />

      <h1>State Lift</h1>
      <SeuNome setNome = {setNome}/>
      <Saudacao nome = {nome}/>

      
    </div>
  );
}

export default App;
