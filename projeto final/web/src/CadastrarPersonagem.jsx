import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import Button from './Button';
import styled from 'styled-components';
const CadastrarPersonagem = (props) =>{
    const Container = styled.div`
    display: flex;
  
  `;
    const params = useParams();
    const jso = [props.lista];
    const [jogadores, setJogadores] = useState([]);
    const [personagem,setPersonagem] = useState();
    const [inputNome, setInputNome] = useState("");
    const [inputLevel, setInputLevel] = useState("");
   const [inputImagem,setInputImagem] = useState("");

    const handleInputImagem = (e) => {
        setInputImagem(e.target.value)
    }


    const handleInputNomeChange = (e) => {
        setInputNome(e.target.value)
    }
    const handleInputLevelChange = (e) => {
        setInputLevel(e.target.value)
    }
    const handleInputImagemChange = (e) => {
        setInputImagem(e.target.value)
    }
  
    const retorna = () => {

        let Filtrado = jso[0].filter(jog => jog.id == params.id);
        setJogadores(Filtrado);
        console.log(Filtrado[0].name)
        return Filtrado[0].name
    }
    return (<Container>
        <label htmlFor="nome">Nome: </label>
            <input type="text" id='nome' size='50' value={inputNome} onChange={handleInputNomeChange}/> <br />

            <label htmlFor="imagem">Imagem: </label>
            <input type="text" id='imagem' size='50' value={inputLevel} onChange={handleInputLevelChange}/> <br />
            <label htmlFor="classe">Classe: </label>
            <input type="text" id='classe' size='50' value={inputLevel} onChange={handleInputLevelChange}/> <br />
      
      <Button onClick={() => {
                   props.att({
                    id: jogadores[0].id,
                    name: jogadores[0].name,
                    level: jogadores[0].level,
                    moeda: jogadores[0].moeda,
                    Shop: jogadores[0].Shop,
                    Personagem: personagem
                  },)
                setInputNome("");
                setInputLevel("");
             
                
                

                }}>
                Adicionar
            </Button>
    </Container>
    );
}

export default CadastrarPersonagem;