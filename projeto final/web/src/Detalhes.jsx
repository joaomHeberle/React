import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Button from './Button';


import Photo from './Photo';
const Detalhes = (props) => {
    const [ini,setIni]=useState([{nome:"",classe:"",imagem:""}])
    const jso = [props.lista];
    const [jogadores, setJogadores] = useState([]);
    const params = useParams();
    const navigate = useNavigate();
    const Lista = styled.div`
    margin: 8px;
    border: 1px solid lightgrey;
    border-radius: 2px;
    margin-left: auto;
    margin-right:auto;
    width:80%;
    display: flex;
    flex-direction: column;
 
  `,


    Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
  margin-left: auto;
  margin-right:auto;
  width:35%;
  display: flex;
  flex-direction: column;
`, retorna = () => {

        let Filtrado = jso[0].filter(jog => jog.id == params.id);
        setJogadores(Filtrado);
      
        return Filtrado[0].name
    }

    useEffect(() => {
        retorna()

    }, [setJogadores]);
    return (
        
        <div>

            <Container>
            <Lista>
                {() => {
                    let Filtrado = jso[0].filter(jog => jog.id == params.id);
                    setJogadores(Filtrado);
                    
                }}{jogadores.map(jog => {
                    return <div key={jog.id}>
                        Nome:{" " + jog.name}
                        <br></br>
                        Level:{" " + jog.level}
                        <br />
                        Moeda:{" " + jog.moeda}
          
                        
                            <Photo lista={jog.Personagem==undefined?ini:jog.Personagem}></Photo>
                          
                    
                    </div>
                   
                })}
                </Lista>
            
            </Container>
            <Button onClick={() => {
                navigate(-1)
            }
            }>Voltar</Button>
            <Button onClick={() => {
                navigate('/')
            }
            }>Pagina Inicial</Button>
            <Button onClick={() => {
                navigate(`/Shop/${params.id}`)
            }
            }>Loja</Button>
            <Button onClick={() => {
                    navigate(`/CadastrarPersonagem/${params.id}`)
                }
                }>Cadastrar Personagem</Button>
        </div>
    );
}

export default Detalhes;