import React from 'react';
import {useState} from 'react';

const Busca=props=> {
   
      const[nome,setNome] = useState("");

      function handleNovoTempo(e) {
        setNome(e.target.value);
       
      }
      return(
      <div>
    <h2>Consulta Tempo</h2>
      
    <input onChange={handleNovoTempo}></input>
    <button  className='botaoBusca' onClick={props.consultar(nome)}>consultar Pelo nome da Cidade</button>
 
  
  
  
  </div>
  );
}

export default Busca;