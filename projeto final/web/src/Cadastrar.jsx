import React, {useState} from "react";


const Cadastrar = props =>{
    const [inputNome, setInputNome] = useState("");
    const [inputLevel, setInputLevel] = useState("");
    const [inputImagem, setInputImagem] = useState("");




    const handleInputNomeChange = (e) => {
        setInputNome(e.target.value)
    }
    const handleInputLevelChange = (e) => {
        setInputLevel(e.target.value)
    }
    const handleInputImagemChange = (e) => {
        setInputImagem(e.target.value)
    }
  

    return (
        <div className='jogadorAdicionar'>
            <label htmlFor="nome">Nome: </label>
            <input type="text" id='nome' size='50' value={inputNome} onChange={handleInputNomeChange}/> <br />

            <label htmlFor="level">Level: </label>
            <input type="text" id='level' size='50' value={inputLevel} onChange={handleInputLevelChange}/> <br />
           
            <button onClick={() => {
                props.add({name: inputNome,level: inputLevel})
                setInputNome("");
                setInputLevel("");
             
                
                

                }}>
                Adicionar
            </button>
        </div>
    )
}

export default Cadastrar;