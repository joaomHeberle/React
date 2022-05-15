import React from 'react'
import Carro from './Carro'


const Carros = props => 
    <>
    
        {props.lista.length > 0 ?
        props.lista.map(carro => <Carro id={carro.id} marca={carro.marca} modelo={carro.modelo}
            ano={carro.ano}cor={carro.cor} />)
        : <p >Não há carros cadastrados</p>
    }
    </>

export default Carros