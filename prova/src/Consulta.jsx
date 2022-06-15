import React from 'react'
import './Consulta.css';
import { useState , useEffect} from 'react';
import chuva from './chuva.jpg'
import sol from './sol.jpg'
import nublado from './nublado.jpg'
import def from './default.png'

 function Consulta(props){

const result=props.resultado;
  const [temMin,setTempMin] = useState("0");
  const[temMax,setTempMax] = useState("0");

function verificaTempo(){
  
 
 if(result.description=="Tempo limpo"){
return sol;
 }else if(result.description=="Tempo nublado"){
return nublado;
 }else if(result.desciption==undefined){
return def;
 }else{
  return chuva;
 }
}
function verificaFore(){
  if(result.forecast==undefined){

  }else{
    verificaTemperaturaMin()
    verificaTemperaturaMax()
  }
}
function verificaTemperaturaMin(){
  if(result.forecast[0].min ===undefined){
  return temMin;
  
  }else{
    return setTempMin(result.forecast[0].min+"°");
  }
}
function verificaTemperaturaMax(){
  if(result.forecast[0].max===undefined){
    return temMax;
 
  }else{
   return  setTempMax(result.forecast[0].max+"°");
  }
}



useEffect(() => {
  verificaFore();
}, [result])


 return(

<div class="Consulta">


 
  {
    <div>
 
    <h1>{result.city}</h1>
    <p>Temperatura Atual: {result.temp==undefined?"0":result.temp+"°"}</p>
    <p>Temperatura Minima: {temMin}</p>
    <p>Temperatura Maxima: {temMax}</p>
    <p>Descrição: {result.description}</p>
    <img id="img" src={verificaTempo()} className="imgBusca" alt={result.description} />

  </div>
 
 }
   </div>
  );
  }
  




    
      


    
   



export default Consulta;