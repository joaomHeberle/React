import {Link} from 'react-router-dom'

const Nav = () => {
    return (
        <nav>
            <div>
                <Link to='/carro'>Home</Link>
                |
                <Link to='/carro/new'>Cadastrar</Link> 
        
            </div>
        </nav>
    );
}
 
export default Nav;