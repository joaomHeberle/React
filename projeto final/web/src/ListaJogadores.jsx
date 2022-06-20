import React from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom'

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
   
      
     
      {/* {JSON.stringify(jso.map(shop=>{
        return shop.Shop
       })) }  */}
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
      <button onClick={props.listar}>Listar todos</button>
     
  {/*     <button onClick={escolheFuncao} value="getContarCliente" >Contar Cliente</button>
      <br></br><br></br>
      <label for="foundId">Procurar: </label>
      <input name="foundId" onChange={handleNovoParam}></input>
      <button onClick={escolheId}>procura ID</button>
      <button onClick={escolheNome}>procura Nome</button>

      <fieldset>
        <legend>Cadastro</legend>

        <label for="codigo">Codigo:</label>
        <input value={Codigo} required onChange={handleNovoCodigo} id="codigo" name="codigo" />
        <label for="nomeEmpresa">Nome da Empresa:</label>
        <input value={NomeEmpresa} required onChange={handleNovoNomeEmpresa} id="nomeEmpresa" name="nomeEmpresa" />
        <label for="nameContato">Nome do contato:</label>
        <input value={Contato} required onChange={handleNovoContato} id="nameContato" name="nameContato" />
        <label for="cargo">Cargo do Contato:</label>
        <input value={Cargo} required onChange={handleNovoCargo} id="cargo" name="cargo" />
        <label for="endereco">Endereco:</label>
        <input value={Ender} required onChange={handleNovoEnder} id="endereco" name="endereco" />
        <label for="Cidade">Cidade:</label>
        <input value={City} required onChange={handleNovoCity} id="Cidade" name="Cidade" />
        <label for="regiao">Região:</label>
        <input value={Region} onChange={handleNovoRegion} id="regiao" name="regiao" required />
        <label for="cep">CEP:</label>
        <input value={CEP} required onChange={handleNovoCEP} id="cep" name="cep" />
        <label for="pais">Pais:</label>
        <input value={Pais} required onChange={handleNovoPais} id="pais" name="pais" />
        <label for="Telefone">Telefone:</label>
        <input value={Telefone} required onChange={handleNovoTelefone} id="Telefone" name="Telefone" />
        <label for="fax">Fax:</label>
        <input value={Fax} required onChange={handleNovoFax} id="fax" name="fax" />
        <button onClick={() => {
          addCliente({
            nome: Contato,
            codigo: Codigo,
            nomeDaEmpresa: NomeEmpresa,
            cargo: Cargo,
            endereco: Ender,
            cidade: City,
            regiao: Region,
            CEP: CEP,
            pais: Pais,
            telefone: Telefone,
            fax: Fax
          })



        }}>Enviar</button>
      </fieldset>
      <label for="del">ID para deletar: </label>
      <input onChange={handleNovoId} />
      <button onClick={handleDeleta}>deletar</button> */}
    </div>
    );
}
 
export default ListaJogadores;