import {Link} from 'react-router-dom'
import styled from 'styled-components';
import './Nav.css';
const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
 background-color:black;
 color:white;

 
  
`;


const Nav = () => {
    return (
        <nav>
           < Container>
                <Link to='/' className='lin'>Home</Link> 
                <Link to='/ListaJogadores' className='lin'>Lista de Jogadores</Link>
                <Link to='/Cadastrar' className='lin'>Cadastrar Jogador</Link>
              
                </Container>
        </nav>
    );
}
 
export default Nav;