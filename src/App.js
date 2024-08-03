import './App.css';

function App() {
  const name = 'Lucas' 
  const newName = name.toUpperCase()
  
  function sum(a,b){
    return a+b
  }

  const url = 'https://via.placeholder.com/150'
  return (
    <div className = 'App'>
      <h1>
        Alterando o Jsx
      </h1>
      <p>
        Ola {newName}
      </p>
      <p>
        Soma: {sum(2,4)}
      </p>
      <img src={url} alt='Minha imagem' />
    </div>
  );
}

export default App;
