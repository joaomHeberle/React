import React from 'react'
import CarroHome from './CarroHome'


const CarrosDetalhes = props => 
    <>
    <br />
        {props.lista.length > 0 ?
        props.lista.map( carro => <CarroHome id={carro.id} marca={carro.marca} />)
        : <p >Não há carros cadastrados</p>
    }
    
    </>

export default CarrosDetalhes