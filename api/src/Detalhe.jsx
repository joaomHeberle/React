import React from 'react';
import { useNavigate, Link } from 'react-router-dom'

const Detalhe = props => {
  const navigate = useNavigate();
  return (  
    <>
    
        {
        props.lista.map(livro => 
          <div>

          <button onClick={() => {navigate(`/detalhe/${livro.id}`)}}> {livro.titulo}.</button>

        </div>
        )
       
    }
    
    </>



  );
}
 
export default Detalhe;


