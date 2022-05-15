import React from 'react';
import './ListaBusca.css'



const ListaBusca = props => 

 

 <>
 <h3>Dados dos livros:</h3>
 
       {
       
        props.lista.map(livro =>
        <div className='divBusca'>
            <img src={livro.volumeInfo.imageLinks.thumbnail} alt={livro.title} /> 
            <p>Titulo:{livro.volumeInfo.title}</p>
          
            <p>Autores:{livro.volumeInfo.authors}</p>
             
             <p>ISQN: {livro.volumeInfo.industryIdentifiers[0].identifier}</p> 
             
            </div> )
         
    }

 </>
 
 
export default ListaBusca;


