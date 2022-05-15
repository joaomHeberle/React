import React from 'react';
import {useState, useEffect} from 'react';
import './busca.css'
import Nav from './Nav';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import axios from 'axios';
import Detalhe from './Detalhe';
import { v4 } from 'uuid';
import Detalhado from './Detalhado';


function Busca() {
  
 
 
 const [livros, setLivros] = useState([]);



    const [livro,setLivro] = useState("");

    const [result,setResult] = useState([]);
    const [apiKey,setApiKey] = useState("AIzaSyA8elusr_nB1mOD-vSX9-qBCj2QWwb6l5k");
  const urlNome = `https://www.googleapis.com/books/v1/volumes?q=intitle:${livro}&key=${apiKey}`;
  const urlISBN = `https://www.googleapis.com/books/v1/volumes?q=isbn:${livro}&key=${apiKey}`;
 
  function handleNovoLivro(e) {
      setLivro(e.target.value);
     
    }

    const consLivroISBN = async (e)=>{
      axios.get(urlISBN)
      .then(data=>{
       
        setResult(data.items);
      })

    
   
    },addLivro = (livro) => {
   
      setLivros([...livros, livro])
    
    },
     consLivroTitulo= async  (e)=>{
   
       axios.get(urlNome)
       .then(data=>{
     
        setResult(data.data.items);

      })
      
    }, deletarLivro=(id)=>{
      let Filtrado = livros.filter(livro => livro.id!==id);
      setLivros(Filtrado);
        console.log(livros);
    };
      



  return (
    
    <div>
      
      <Router>
<Nav/>
<Routes>
<Route path='/' /> 
 <Route path='/Detalhe' element={<Detalhe lista ={livros} />}/> 
 <Route path='/detalhe/:id/' exact element={<Detalhado lista={livros} deletar={deletarLivro}/>}/>   
 </Routes>  
</Router>

        <h2>Consulta Livros</h2>
      
      <input onChange={handleNovoLivro}></input>
     
      <br/>
      <button  className='botaoBusca' onClick={consLivroISBN}>consultar ISBN</button>
      <button onClick={consLivroTitulo}>consultar Titulo</button>
    <br/>
    <h3>Dados dos livros:</h3>
<div className='centro'>
 {
  

  result.map(livro =>
  <div className='divBusca'>
   
      <img src={livro.volumeInfo.imageLinks.thumbnail} className="imgBusca" alt={livro.title} />
    
   
     <div>
      <p className='p'>Titulo: {livro.volumeInfo.title}.</p>
    
      
        <p>Autores: {livro.volumeInfo.authors.map(author=>
          author 
          )}.</p>
          {livro.volumeInfo.industryIdentifiers.map(indent=>
              <>
              <p>{indent.type}:{" "} 
                {indent.identifier}.</p>
                </>
            )}

</div>

<button className='btn' onClick={()=>{
addLivro({
  id:v4(),
  imagem:livro.volumeInfo.imageLinks.thumbnail,
    titulo:livro.volumeInfo.title,
    autor:livro.volumeInfo.authors.map(author=>
      author 
      ) , 
      tipo:livro.volumeInfo.industryIdentifiers.map(indent=> indent.type),
     ISQN:livro.volumeInfo.industryIdentifiers.map(indent=> indent.identifier),
})

}}>Adicionar a minha lista</button>  
      
      </div>)}
      </div>

    </div>
    
  );
}

export default Busca;
