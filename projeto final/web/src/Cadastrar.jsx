import React, {useState} from "react";
import { useNavigate } from 'react-router-dom'
import Button from "./Button";
import styled from 'styled-components';
const Cadastrar = props =>{
    const [inputNome, setInputNome] = useState("");
    const [inputLevel, setInputLevel] = useState("");
   
    const navigate = useNavigate();
    const Container = styled.div`
    display: flex;
    display: -ms-flexbox;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: space-around;
    align-items: center;
  `;


    const handleInputNomeChange = (e) => {
        setInputNome(e.target.value)
    }
    const handleInputLevelChange = (e) => {
        setInputLevel(e.target.value)
    }
   
  

    return (
        <Container>
            <label htmlFor="nome">Nome: </label>
            <input type="text" id='nome' size='50' value={inputNome} onChange={handleInputNomeChange}/> <br />

            <label htmlFor="level">Level: </label>
            <input type="text" id='level' size='50' value={inputLevel} onChange={handleInputLevelChange}/> <br />
            <Button onClick={() => {
                navigate('/')
            }
            }>Voltar</Button>
            <Button onClick={() => {
                props.add({name: inputNome,level: inputLevel,moeda:1000})
                setInputNome("");
                setInputLevel("");
             
                navigate('/')
                

                }}>
                Adicionar
            </Button>
          
        </Container>
    )
}

export default Cadastrar;