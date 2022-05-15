import logo from './img/logoIF5.jpg';
import './App.css';
import Cards from './Cards'
import {useState} from 'react'

function App() {
  const estudantesIniciais = [
    {
      nome: 'Joao',
      descricao: "Descrição do João - Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      nome: 'Maria',
      descricao: "Descrição da Maria - Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      nome: 'Ana',
      descricao: "Descrição da Ana - Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    }
  ]

  const [estudantes, setEstudantes] = useState(estudantesIniciais);
  const addEstudante = (estudante) => {
    setEstudantes([...estudantes, estudante])
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <p>Estudantes</p>
        <Cards lista={estudantes} />

        <p>Adicionar novo estudante:</p>
        <CardAdicionar addEstudante={addEstudante}/>
        
      </header>
    </div>
  );
}

export default App;
