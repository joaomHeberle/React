import React from 'react';
import {useState, useEffect} from 'react';
import { useParams, useNavigate } from 'react-router-dom'
import './busca.css'
const Detalhado =props => {
  const navigate = useNavigate();
    const params = useParams();
    const [liv, setliv] = useState([]);
    const [livros, setLivros] = useState(props.lista);
   const detalhar=(id)=>{
        let Filtrado = props.lista.filter(livro => livro.id==id);
        setliv(Filtrado);
       
        }
   
    
        useEffect(() => {
            detalhar(params.id)
        
        }, []);
       
  return (
    <div>

  <h3>Detalhe do livro:</h3>

<div className='centro'>

<button onClick={()=>{
 detalhar(params.id);
console.log(liv)
}}>detalhar</button>
{liv.map(livro=>
<div className='divBusca'>

<img src={livro.imagem} className="imgBusca" alt={livro.title} />


<p>titulo: {livro.titulo}  
  </p>
  <div>
    <p className='p'>Titulo: {livro.titulo}.</p>
  
    
      <p>Autores: {livro.autor.map(author=>
        author
        )}.</p>
        {livro.tipo.map(indent=>
          <p>
            {indent}:</p>)}{ livro.ISQN.map(is=>
             <p>{is}</p>
             ) }
              
              <button className='btn'onClick={()=>{
                props.deletar(livro.id)
                navigate(`/Detalhe`)
              }} >Deletar</button>
             
         
         

</div>
  </div>
 )}
    </div>

  </div>
  
);
}


export default Detalhado;
