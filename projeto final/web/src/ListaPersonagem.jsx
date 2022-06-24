import { useParams, useNavigate } from 'react-router-dom'
import styled from 'styled-components';
import img1 from './imagem/1.png';
import img2 from './imagem/2.png';
import img3 from './imagem/3.png';
import img4 from './imagem/4.png';
import img5 from './imagem/5.png';
import img6 from './imagem/6.png';
import Button from './Button';

import {  useState,useEffect } from 'react';

const ListaPersonagem=(props)=>{

    const params = useParams(),
    Container = styled.div`
    margin: 8px;
    border: 1px solid lightgrey;
    border-radius: 2px;
    margin-left: auto;
    margin-right:auto;
    width:20rem;
    display: flex;
    flex-direction: column;
  `
  ,navigate=useNavigate()
  ,      Foto = styled.div`
  margin: 8px;
     border: 1px solid lightgrey;
     border-radius: 2px;
     margin-left: auto;
     margin-right:auto;
     width:80%;
     display: flex;
     flex-direction: column;

   `
   const [jogadores, setJogadores] = useState();

   const [inputNome, setInputNome] = useState("");

  const montaImagem = (e) => {
      console.log(e)
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
  }
  useEffect(() => {
  
}, []);
    return(
   <Container>
    <Foto>
    Nome: {params.nome}<br></br>
   Classe: {params.classe}<br></br>
   </Foto>
    <img src={montaImagem(params.imagem)}></img>
    <Button onClick={() => {
                navigate(-1)
            }
            }>Voltar</Button>
            <Button onClick={() => {
                navigate('/')
            }
            }>Pagina Inicial</Button>
   </Container>
    )
}
export default ListaPersonagem;