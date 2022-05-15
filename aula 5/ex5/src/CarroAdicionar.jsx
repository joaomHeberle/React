import React, {useState} from "react";

const CarroAdicionar = props =>{
    const [inputMarca, setInputMarca] = useState("");
    const [inputModelo, setInputModelo] = useState("");
    const [inputAno, setInputAno] = useState("");
    const [inputCor, setInputCor] = useState("");



    const handleInputMarcaChange = (e) => {
        setInputMarca(e.target.value)
    }
    const handleInputModeloChange = (e) => {
        setInputModelo(e.target.value)
    }
    const handleInputAnoChange = (e) => {
        setInputAno(e.target.value)
    }
    const handleInputCorChange = (e) => {
        setInputCor(e.target.value)
    }

    return (
        <div className='carroAdicionar'>
            <label htmlFor="marca">Marca: </label>
            <input type="text" id='marca' size='50' value={inputMarca} onChange={handleInputMarcaChange}/> <br />

            <label htmlFor="modelo">Modelo: </label>
            <input type="text" id='modelo' size='50' value={inputModelo} onChange={handleInputModeloChange}/> <br />
            <label htmlFor="ano">Ano: </label>
            <input type="text" id='ano' size='50' value={inputAno} onChange={handleInputAnoChange}/> <br />
            <label htmlFor="cor">Cor: </label>
            <input type="text" id='Cor' size='50' value={inputCor} onChange={handleInputCorChange}/> <br />
            
        
            <button onClick={() => {
                props.addCarro({marca: inputMarca,modelo: inputModelo, ano: inputAno,cor:inputCor})
                // texto padrao dentro do input depois do botao
                setInputMarca("");
                setInputModelo("");
                setInputAno("");
                setInputCor("");
                

                }}>
                Adicionar
            </button>
        </div>
    )
}

export default CarroAdicionar;