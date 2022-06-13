
import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';



function App() {
  const [cliente, setCliente] = useState('');
  const [level, setNovoLevel] = useState('');
  const [nome, setNovoNome] = useState('');

  const [id, setId] = useState("");
  

  const [jso, setJso] = useState();
 


  function handleNovoNome(e) {
    setNovoNome(e.target.value);
  }
  function handleNovoLevel(e) {
    setNovoLevel(e.target.value);
  }
 


  const handleListaTodos = async () => {



    const { data } = await axios.get(`http://localhost:4000/jogadores`);

    if (data) {
      setJso(data);
     

    }


  }
  //, 
  // handleEnvia = async () => {
  //   setFuncao("setCliente")

  //   console.log(clientes);


  //   const { data } = await axios.post(url, clientes, {
  //     headers: {

  //       'Content-Type': 'application/json'
  //     }
  //   });
  //   setJso(data);

  // },
  //  handleDeleta = async () => {
  //   setFuncao("deleteClienteID/" + id)
  //   const { data } = await axios.delete(url);
  //   setJso(data);
  // },
  //  escolheFuncao = (e) => {

  //   setFuncao(e.target.value);
  //   handleClickUpdate();
  // },
  //  escolheId = (e) => {

  //   setFuncao("getClienteId/" + para);
  // },
  //  escolheNome = (e) => {

  //   setFuncao("getClienteNome/" + para);
  // },
  //   addCliente = async (cliente) => {

  //     setClientes([cliente])
  //     handleEnvia();

  //   }
  useEffect(() => {
   

  }, [])


  return (
    <div className="App">
      <h1>Meu Web Service</h1>
      {console.log(jso[0].name)}
      <pre >
       {jso[0].name}
      </pre>


      <button onClick={handleListaTodos} value="lista" >Lista Jogadores</button>
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

export default App;
