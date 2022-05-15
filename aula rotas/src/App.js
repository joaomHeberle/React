
import Detalhe from "./Detalhe";
import Editar from "./editar";
import Home from "./Home";
import Novo from "./novo";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Nav from "./Nav";




function App() {
 
  
  return (

  

    <Router>
    <div className="App">
  <Nav/>
    <div className="carro">
    <Routes>
      <Route path="/carro" element={<Home/>}></Route>
      <Route path="/carro/:id" element={<Detalhe/>}></Route>
      <Route path="/carro/new" element={<Novo/>}></Route>
      <Route path="/carro/:id/edit" element={<Editar/>}></Route>

    </Routes>



    </div>




    </div>
   
    </Router>


 
  );
}

export default App;
