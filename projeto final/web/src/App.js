
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
import CadastrarPersonagem from './CadastrarPersonagem';

function App() {

  const [jogador, setJogador] = useState('');
  const [level, setNovoLevel] = useState('');
  const [nome, setNovoNome] = useState('');
  const [id, setId] = useState("");
  const [jso, setJso] = useState([]);
 const [moeda,setMoeda]= useState(0);


  function handleNovoNome(e) {
    setNovoNome(e.target.value);
  }
  function handleNovoLevel(e) {
    setNovoLevel(e.target.value);
  }
/*  const verificarAtivo=()=>{
  var elementos
  return elementos = rootElement.getElementsByClassName(active);
 } */


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

    addJogador =  (joga) => {

      setJogador(joga)
      handleEnvia(joga);
console.log(joga)
    },
    addMoeda = (moe)=>{
      setMoeda(moe);
    }
 


useEffect(() => {
  handleListaTodos()

},[])

  return (

    <div className="App">
           
      
      <Router>
      <div className="App">
      <Nav/>
        <h1>Jogo Web</h1>
   
        <div className="App-center">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/shop/:id/' element={<Shop att={handleUpdate} addMoeda={addMoeda} lista={jso}/>}/>
            <Route path='/ListaJogadores' element={<ListaJogadores deletar={handleDeleta} listar={handleListaTodos} lista={jso}/>}/>
            <Route path='/ListaJogadores/:id/' element={<Detalhes lista={jso}/>}/>
            <Route path='/Cadastrar' element={<Cadastrar add={addJogador}/>}/>
            <Route path='/CadastrarPersonagem/:id/' element={<CadastrarPersonagem att={handleUpdate} add={addJogador}lista={jso}/>}/>
          </Routes>
       
        </div>
      </div>
    </Router>



     </div>
  );
}

export default App;
