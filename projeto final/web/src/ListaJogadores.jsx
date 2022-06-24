import React from 'react'
import styled from 'styled-components';
import Button from "./Button";
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';


const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
  margin-left: auto;
  margin-right:auto;
  min-width:20rem;
  max-width:25rem;
  display: flex;
  flex-direction: column;
 background-color:Lavender;
`;

const Lista = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
  margin-left: auto;
  margin-right:auto;
  min-width:10rem;
  max-width:30rem;
  display: flex;
  flex-direction: column;
  cursor: pointer;
 	background-color: ghostwhite;
}
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
  background-color: ghostwhite;
`;
const Update = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
  margin-left: auto;
  margin-right:auto;
  min-width:50%;
  max-width:75%;
  display: flex;
  flex-direction: column;
  background-color: ghostwhite;
`;

const ListaJogadores = (props) => {
  const jso = [props.lista];
  
  const navigate = useNavigate();
  const [inputNome, setInputNome] = useState("");

  const handleInputNomeChange = (e) => {
   
      setInputNome(e.target.value)
    
  }
  return (
    <div>
      {console.log(jso[0])}
      <pre >

        {jso[0].map((user) => {
          return <Container key={user.id} >
            <Lista onClick={() => navigate(`/ListaJogadores/${user.id}`)}>
              Listar<br />
              Nome: {user.name + " "}
              Level: {
                user.level
              }
             

            </Lista>
            <Update>
           
              <label htmlFor="level">Nome: </label>
              <input type="text" id='level' size='50' placeholder={user.name} onChange={
               
               handleInputNomeChange 

                } /> <br />
            <Button onClick={()=>{
            props.att(
             user,
             user.name=inputNome
        )
        navigate('/ListaJogadores')
        }}>Atualizar</Button>
            </Update>

            <Deletar onClick={() => {
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