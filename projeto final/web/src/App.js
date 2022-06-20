
import './App.css';
import Shop from './Shop/Shop';
import axios from 'axios';
import { useState, useEffect } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './Home';
import Nav from './Nav';
import ListaJogadores from './ListaJogadores'
import Detalhes from './Detalhes';
import Cadastrar from './Cadastrar'

function App() {

  const [jogador, setJogador] = useState('');
  const [level, setNovoLevel] = useState('');
  const [nome, setNovoNome] = useState('');
  const [id, setId] = useState("");
  const [jso, setJso] = useState([]);
 const [moeda,setMoeda]= useState(1000);


  function handleNovoNome(e) {
    setNovoNome(e.target.value);
  }
  function handleNovoLevel(e) {
    setNovoLevel(e.target.value);
  }
 


  const handleListaTodos = async () => {



    const { data } = await axios.get(`http://localhost:4000/jogadores`);

    if (data) {
      setJso(data);
     
    }


  }, 
   handleEnvia = async (jog) => {
    
 

     const { data } = await axios.post(`http://localhost:4000/jogadores`, jog);
     handleListaTodos();

 },
 handleUpdate = async(jog)=>{

console.log(jog)

const {data}=await axios.put(`http://localhost:4000/jogadores`, jog)
handleListaTodos();


 },
   handleDeleta = async (id) => {

    const { data } = await axios.delete(`http://localhost:4000/jogadores/${id}`);
    handleListaTodos();
  },
  //  escolheFuncao = (e) => {

  //   setFuncao(e.target.value);
  //   handleClickUpdate();
  // },
  //  escolheId = (e) => {

  //   setFuncao("getClienteId/" + para);
  // },
  //  escolheNome = (e) => {

  //   setFuncao("getClienteNome/" + para);
  // },
    addJogador = async (joga) => {

      setJogador(joga)
      handleEnvia(joga);
console.log(joga)
    }



useEffect(() => {
  handleListaTodos()

},[])

  return (

    <div className="App">
          
      <h1>Jogo Web</h1>
      <Router>
      <div className="App">
      <Nav/>
        <div className="App-center">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/shop/:id/' element={<Shop moeda={moeda} att={handleUpdate} lista={jso}/>}/>
            <Route path='/ListaJogadores' element={<ListaJogadores deletar={handleDeleta} listar={handleListaTodos} lista={jso}/>}/>
            <Route path='/ListaJogadores/:id/' element={<Detalhes lista={jso}/>}/>
            <Route path='/Cadastrar' element={<Cadastrar add={addJogador}/>}/>
          </Routes>
       
        </div>
      </div>
    </Router>



     </div>
  );
}

export default App;
