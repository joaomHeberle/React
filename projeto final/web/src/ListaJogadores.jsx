import React from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom'
import Button from "./Button";
import { useNavigate} from 'react-router-dom'



const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
  margin-left: auto;
  margin-right:auto;
  width:50%;
  display: flex;
  flex-direction: column;
 
`;

const Lista = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
  margin-left: auto;
  margin-right:auto;
  width:80%;
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;
const Deletar = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
  margin-left: auto;
  margin-right:auto;
  width:50%;
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

const ListaJogadores = (props) => {
    const jso=[props.lista];
    const navigate = useNavigate();
 

    return ( 
        <div>
      
             <pre >

{jso[0].map((user)=>{
    return <Container key={user.id} >
        <Lista onClick={()=>navigate(`/ListaJogadores/${user.id}`)}>
        Listar<br/>
        Nome: {user.name+" "} 
        Level: {
            user.level
        }
      
      
        </Lista>
        <Deletar onClick={()=>{
          props.deletar(user.id)
          }
          }>
        Deletar

        </Deletar>
  
        </Container>
       
       
    })
}



      </pre>
      <Button onClick={props.listar}>Listar todos</Button>
     
  
    </div>
    );
}
 
export default ListaJogadores;