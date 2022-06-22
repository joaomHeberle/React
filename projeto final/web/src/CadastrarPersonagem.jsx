import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import Button from './Button';
import styled from 'styled-components';
import Select from 'react-select'
import Carousel from './Carousel';
import img1 from './imagem/1.jpg'
const CadastrarPersonagem = (props) =>{
    const Container = styled.div`
    display: flex;

    display: -ms-flexbox;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: space-around;
    align-items: center;
  `;
  const Car = styled.div`
  display: flex;

  display: -ms-flexbox;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: space-around;
  align-items: center;
  width:75%;
  margin-left: auto;
  margin-right: auto;
  `;
    const params = useParams();
    const jso = [props.lista];
    const [jogadores, setJogadores] = useState([]);
    const [personagem,setPersonagem] = useState();
    const [inputNome, setInputNome] = useState("");
    const [inputLevel, setInputLevel] = useState("");
   const [inputImagem,setInputImagem] = useState("");
   const options = [
    { value: 'Guerreiro', label: 'Guerreiro' },
    { value: 'Mago', label: 'Mago' },
    { value: 'Ladrão', label: 'Ladrão' }
  ]
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
  const getImagem=(e)=>{
    if(e==1){
    
     
        setInputImagem(img1)
    }
   
    
  }
    const retorna = () => {

        let Filtrado = jso[0].filter(jog => jog.id == params.id);
        setJogadores(Filtrado);
        console.log(Filtrado[0].name)
        return Filtrado[0].name
    }
    return (
    <div>
    <Container>
        <label htmlFor="nome">Nome: </label>
            <input type="text" id='nome' size='50' value={inputNome} onChange={handleInputNomeChange}/> <br />

            <label htmlFor="classe">Classe: </label>
            <img src={inputImagem}></img>
            <Select options={options} />


            
           
      
            
    </Container>
    <Car>
    <Carousel get={getImagem}/>
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
    </Car>
    </div>
    );
}

export default CadastrarPersonagem;