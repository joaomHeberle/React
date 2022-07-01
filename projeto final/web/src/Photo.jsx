import img1 from './imagem/1.png';
import img2 from './imagem/2.png';
import img3 from './imagem/3.png';
import img4 from './imagem/4.png';
import img5 from './imagem/5.png';
import img6 from './imagem/6.png';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom'
import Button from './Button';
const Photo = (props) => {
    const navigate = useNavigate();
    const photo = props.lista,
        montaImagem = (e) => {
            
            switch (e) {
                case '1':
                    return img1

                case '2':
                    return img2

                case '3':
                    return img3

                case '4':
                    return img4

                case '5':
                    return img5

                case '6':
                    return img6

                default:

                    break;
            }
        },
        Foto = styled.div`
        margin: 8px;
           border:${() =>(
            photo[0].imagem==""?'':'1px solid lightgrey'
           
            )}; 
           border-radius: 2px;
           margin-left: auto;
           margin-right:auto;
           width:40%;
           display: flex;
           flex-direction: column;

        cursor:${() =>(
            photo[0].imagem==""?'':'pointer'
           
            )};
      

         `

const remove=(e)=>{




}



    return (
        <div>

            {photo.map((foto, index) =>
                <Foto key={index}>
                    <img src={montaImagem(foto.imagem)}  alt="" onClick={
                        () => navigate(`/ListaPersonagem/${foto.nome}/${foto.classe}/${foto.imagem}`)} />
                    <Button onClick={()=>{
                    
                        
                        props.get(index)
                        }}>Deletar</Button>
                    
                </Foto>
            )}
   
        </div>
    );
}

export default Photo;