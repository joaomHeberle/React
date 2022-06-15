
import './App.css';
import React from 'react';
import Consulta from './Consulta';
import { useState , useEffect} from 'react';
import axios from 'axios';
function App() {
  const [result,setResult] = useState([]);
  const[nome,setNome] = useState("");
  const consuCidade = async (e)=>{
    await axios.get(`https://api.hgbrasil.com/weather?format=json-cors&key=917f9ab7&city_name=${nome}`)
    
     .then(data=>{
   
       setResult(data.data.results)
   
       }
     )
   }
   function handleNovoTempo(e) {
    setNome(e.target.value);
   
  }
  return (
    <div class="App">
      <div id="consulta">
    <h2>Consulta Tempo</h2>
    
    <input onChange={handleNovoTempo}></input>
    <button  className='botaoBusca' onClick={consuCidade}>consultar Pelo nome da Cidade</button>
    </div>
    <Consulta resultado={result}></Consulta>
    
    </div>
  );
}

export default App;
