
import Carros from './Carros'
import CarroAdicionar from './CarroAdicionar'
import {useState} from 'react'
import "./meu.css"

function App() {
  const carrosIniciais = [
    {
      id:1,
   marca:"ford",
   modelo:"bonito" , 
   ano:"1992",
   cor: "preta"
 },
 {
   id:2,
  marca:"oi",
  modelo:"feio" , 
  ano:"1975",
  cor: "branco"
 }


  ]
  const [carros, setCarros] = useState(carrosIniciais);
  const addCarro = (carro) => {
    setCarros([...carros, carro])
  }
  const delCarro = (carro)=>{
    setCarros([...carros, carro])
  }
  return (
    <div className="App">
    <header className="App-header">

      
      <p>Carros</p>
 
      <Carros lista={carros}  />
    
      <p>Adicionar novo carro:</p>
      <CarroAdicionar addCarro={addCarro}/>


    </header>
  </div>
  );
}

export default App;
