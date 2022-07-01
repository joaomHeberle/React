import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Button from './Button';


import Photo from './Photo';
const Detalhes = (props) => {


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
    width:20rem;
    display: flex;
    flex-direction: column;
    background-color: ghostwhite;
  `,


        Container = styled.div`
  margin: 8px;
  margin-left: auto;
  margin-right:auto;
  width:20rem;
  display: flex;
  flex-direction: column;
  
`,
        Conter = styled.div`
margin: 8px;
border: 1px solid lightgrey;
border-radius: 2px;
margin-left: auto;
margin-right:auto;
width:10rem;
display: flex;
flex-direction: column;

`
        ,
         retorna = () => {

            let Filtrado = jso[0].filter(jog => jog.id == params.id);
            setJogadores(Filtrado);
            console.log("entrou")
            return Filtrado[0].name
        },
        getIndex=(e)=>{
           jogadores[0].Personagem.splice(e,1)
           console.log(jogadores)
           props.att(jogadores[0])
        }

    useEffect(() => {
        retorna()
    
    }, []);
    return (

        <div>

            <Container>
                <Lista>
                    {() => {
                        let Filtrado = jso[0].filter(jog => jog.id == params.id);
                        setJogadores(Filtrado);

                    }}{jogadores.map(jog => {
                        return <div key={jog.id}>
                            <Conter>
                                Nome:{" " + jog.name}
                                <br></br>
                                Level:{" " + jog.level}
                                <br />
                                Moeda:{" " + jog.moeda}
                            </Conter>


                            <Photo lista={jog.Personagem} get={getIndex} id={jog.id} att={props.att}></Photo>
                           
                        
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