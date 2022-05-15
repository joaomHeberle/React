import React, {useState} from "react";
import Carros from "./Carros";



const CarroDeletar = props =>{
  

    return (
        <button className="id" value={props.id}  onClick={() => {
        alert("props.id");
            

        } }>deletar</button>
   
   
    )
}



 //pessoas.filter(pessoa => pessoa.id != id);



export default CarroDeletar;