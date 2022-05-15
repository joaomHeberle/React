import react from 'react';
import './Card.css'
import avatar from './img/avatar.png'

const Card = props =>
    <div className="card">
        <img src={avatar} />
        <p className="nome">{props.nome}</p>
        <p>{props.descricao}</p>
    </div>

export default Card