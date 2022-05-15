import { useParams, useNavigate } from 'react-router-dom'


const Detalhe = () => {
    const params = useParams();
    const navigate = useNavigate();
    return (  
        <h1>foi recebido{params.id}</h1>


    );
}
 
export default Detalhe;