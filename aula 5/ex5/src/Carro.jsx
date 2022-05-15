import React from "react";
import CarroDeletar from "./CarroDeletar";

const Carro = props =>
<div id="car">
<p className="marca">{props.id}</p>
<p className="marca">{props.marca}</p>
        <p className="modelo">{props.modelo}</p>
        <p className="ano">{props.ano}</p>
        <p className="cor">{props.cor}</p>
       <CarroDeletar></CarroDeletar>
 


</div>

export default Carro;