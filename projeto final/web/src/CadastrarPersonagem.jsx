import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import "./Personagem.css"
import Button from './Button';
import styled from 'styled-components';
import Select from 'react-select'
import Carousel from './Carousel';


const CadastrarPersonagem = (props) => {
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
  
  const options = [
    { value: 'Guerreiro', label: 'Guerreiro',id:0 },
    { value: 'Mago', label: 'Mago',id:1 },
    { value: 'Ladrão', label: 'Ladrão',id:2 }
  ]
  const tema = (theme) => ({
    ...theme,
    borderRadius: 0,
    colors: {
      ...theme.colors,
      primary25: '#800080',
      primary: 'black',
    },
  })
  const params = useParams();
  const jso = [props.lista];
  const [jogadores, setJogadores] = useState([]);

  const [inputNome, setInputNome] = useState("");
 const [classe,setClasse]= useState('Guerreiro');
  const [opt,setOpt]=useState(options[0])
  
  var imge="1";
 




  const handleInputNomeChange = (e) => {
    setInputNome(e.target.value)
  }
  
  const getImagem = (e) => {
 
    switch (e) {
      case '1':
        imge="1"
        break;
      case '2':
        imge='2'
        break;
      case '3':
        imge='3'
        break;
      case '4':
        imge='4'
        break;
      case '5':
        imge='5'
        break;
      case '6':
        imge='6'
        break;
      default:

        break;
    }
 


  }

  const retorna = () => {

    let Filtrado = jso[0].filter(jog => jog.id == params.id);
    setJogadores(Filtrado);

    
  }


      useEffect(() => {
        retorna()

    }, [setJogadores]);
  return (
    <div className=''>
      <div className='nome'>
       <label htmlFor="nome">Nome: </label>
       <input type="text" id='nome' size='50' value={inputNome} onChange={handleInputNomeChange} /> 
      
        <br />
</div>
<Container>
       
       <label htmlFor="classe">Classe: </label>
       <Select  id="classe" defaultValue={opt} options={options} theme={tema} isSearchable isLoading 
       onChange={e=>{
         setClasse(e.value)
         setOpt(options[e.id])
     
       }}/>
       {() => {
                   let Filtrado = jso[0].filter(jog => jog.id == params.id);
                   setJogadores(Filtrado);

               }}


     </Container>
      <Car>
        <Carousel get={getImagem} />
        <Button onClick={() => {
      
          props.att({
            id: jogadores[0].id,
            name: jogadores[0].name,
            level: jogadores[0].level,
            moeda: jogadores[0].moeda,
            Shop: jogadores[0].Shop,
            Personagem: {
              nome:inputNome,
              classe:classe,
              imagem:imge
            }
          })  



        }}>
          Adicionar
        </Button>
    
       
      </Car>
      
    </div>
  );
}

export default CadastrarPersonagem;