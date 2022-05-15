import React from 'react';
import {Link} from 'react-router-dom'
import './Nav.css'

function Nav() {
  return (
    <div >
        <nav >
      <Link to="/">Busca</Link>{"  "} 
      <Link to="/Detalhe">Meus livros</Link>
  
      </nav>
    
      <br />
    </div>
  );
}

export default Nav;
