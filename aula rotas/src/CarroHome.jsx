import React from "react";
import { useNavigate } from 'react-router-dom'


const CarroHome = props =>{
    const navigate = useNavigate();

   

return(

<div>
    <button type="submit" value={props.id} onClick={() => {navigate(`/carro/${props.id}`)}}>{props.id}</button>
   
<p className="marca">{props.marca}</p>
    
        <input type="button" id='id' size='50' value="deletar" onClick={()=>{props.deletar(props.id)}}/> 
 


</div>
);
}
export default CarroHome;