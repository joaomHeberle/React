import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Button from './Button';
const Detalhes = (props) => {
    const jso = [props.lista];
    const [jogadores, setJogadores] = useState([]);
    const params = useParams();
    const navigate = useNavigate();
  
    const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
  margin-left: auto;
  margin-right:auto;
  width:35%;
  display: flex;
  flex-direction: column;
`;

    const retorna = () => {

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
                <h1>{() => {
                    let Filtrado = jso[0].filter(jog => jog.id == params.id);
                    setJogadores(Filtrado);

                }}{jogadores.map(jog => {
                    return <div>
                        Nome:{" " + jog.name}
                        <br></br>
                        Level:{" " + jog.level}
                        <br />
                        Moeda:{" " + jog.moeda}
                    </div>
                })}</h1>
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