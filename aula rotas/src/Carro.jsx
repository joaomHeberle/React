import React from "react";



const Carro = props =>
<div>
<p className="id">{props.id}</p>
<p className="marca">{props.marca}</p>
        <p className="modelo">{props.modelo}</p>
        <p className="ano">{props.ano}</p>
        <p className="cor">{props.cor}</p>
    
        <input type="button" id='id' size='50' value="deletar" onClick={()=>{props.deletar(props.id)}}/> 
 


</div>

export default Carro;