import React from 'react'
import Card from './Card'


const Cards = props => 
    <>
        {props.lista.length > 0 ?
        props.lista.map(card => <Card nome={card.nome} descricao={card.descricao} />)
        : <p style={{fontSize:"18px", color:"red"}}>Não há estudantes cadastrados</p>
    }
    </>

export default Cards