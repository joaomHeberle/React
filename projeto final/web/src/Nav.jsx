import {Link} from 'react-router-dom'

const Nav = () => {
    return (
        <nav>
            <div>
                <Link to='/'>Home</Link>  |  
                <Link to='/ListaJogadores'>Lista de Jogadores</Link> |
                <Link to='/Cadastrar'>Cadastrar</Link> |
                <Link to='/Pag2'>Página 2</Link>
            </div>
        </nav>
    );
}
 
export default Nav;