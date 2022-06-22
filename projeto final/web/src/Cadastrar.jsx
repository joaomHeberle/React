import React, {useState} from "react";

import Button from "./Button";
const Cadastrar = props =>{
    const [inputNome, setInputNome] = useState("");
    const [inputLevel, setInputLevel] = useState("");
   




    const handleInputNomeChange = (e) => {
        setInputNome(e.target.value)
    }
    const handleInputLevelChange = (e) => {
        setInputLevel(e.target.value)
    }
   
  

    return (
        <div className='jogadorAdicionar'>
            <label htmlFor="nome">Nome: </label>
            <input type="text" id='nome' size='50' value={inputNome} onChange={handleInputNomeChange}/> <br />

            <label htmlFor="level">Level: </label>
            <input type="text" id='level' size='50' value={inputLevel} onChange={handleInputLevelChange}/> <br />
           
            <Button onClick={() => {
                props.add({name: inputNome,level: inputLevel,moeda:1000})
                setInputNome("");
                setInputLevel("");
             
                
                

                }}>
                Adicionar
            </Button>
        </div>
    )
}

export default Cadastrar;