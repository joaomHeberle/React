import './App.css';
import Lista from './Lista'

function App() {
  let elementos = ['Elemento 1','Elemento 2','Elemento 3','Elemento 4','Elemento 5']
  let elements = ['Element 1','Element 2','Element 3','Element 4','Element 5']
  let el = []
  return (
    <div className="App">
      <h1>Listas</h1>

      <Lista titulo="Lista 1" elementos = {elementos}/>
      <Lista titulo="Lista 2" elementos = {elements}/>
      <Lista titulo="Lista 3" elementos = {el}/>
      
    </div>
  );
}

export default App;