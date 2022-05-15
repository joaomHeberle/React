
import Carros from './Carros'
import CarroAdicionar from './CarroAdicionar'
import {useState} from 'react'
import {v4} from 'uuid'




function App() {
  const carrosIniciais = [
    {
      id:v4(),
   marca:"ford",
   modelo:"bonito" , 
   ano:"1992",
   cor: "preta"
 },
 {
   id:v4(),
  marca:"oi",
  modelo:"feio" , 
  ano:"1975",
  cor: "branco"
 }


  ]
  const [carros, setCarros] = useState(carrosIniciais);


const delCarro=(id)=>{
let carroFiltrado = carros.filter(carro => carro.id!==id);
setCarros(carroFiltrado)
}




  const addCarro = (carro) => {
    setCarros([...carros, carro])
  }
  return (
    <div className="App">
    <header className="App-header">

      
      <p>Carros</p>
      <Carros lista={carros} deletar={delCarro} />
    
      <p>Adicionar novo carro:</p>
      <CarroAdicionar addCarro={addCarro}/>

  

    </header>
  </div>
  );
}

export default App;
