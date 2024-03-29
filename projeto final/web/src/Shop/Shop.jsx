import { useState, useEffect } from 'react';
import DadosIniciais from './DadosIniciais';
import Coluna from './Coluna';
import styled from 'styled-components';
import { useParams, useNavigate } from 'react-router-dom'
import { DragDropContext } from 'react-beautiful-dnd';
import Button from "../Button";

function Shop(props) {
  const Container = styled.div`
  display: flex;

`;




  const navigate = useNavigate();
  const [jogadores, setJogadores] = useState([]);
  const jso = [props.lista];
  const [moeda, setMoeda] = useState("");
  const [contador,setContador]=useState(0);
  const [loja, setLoja] = useState([]);

  
  const [lista, setLista] = useState('');

  const [preco, setPreco] = useState([lista]);

  const params = useParams();


  const handleOnDragStart = () => {

    document.body.style.color = 'blue';
    document.body.style.transition = 'background-color 0.2s ease';
  }

  const handleOnDragUpdate = update => {
  
    const { destination } = update;
    const opacity = destination
      ? destination.index / Object.keys(loja.itens).length
      : 0;
    document.body.style.backgroundColor = `rgba( 153, 141, 217, ${opacity})`;
  };
 
  const handleOnDragEnd = result => {
    document.body.style.color = 'inherit';
    document.body.style.backgroundColor = 'inherit';
    var somaMoeda;
    
    const { destination, source, draggableId } = result;
    console.log(destination.droppableId)
    var col=destination.droppableId;


    const retPreco = 1;

    if (!destination) {
      return;
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }



    const start = loja.colunas[source.droppableId];
    const finish = loja.colunas[destination.droppableId];
    
    if (start === finish) {
      const newItensId = Array.from(start.itensId);
      newItensId.splice(source.index, 1);
      newItensId.splice(destination.index, 0, draggableId);


      const newColuna = {
        ...start,
        itensId: newItensId,
      };

      const newlistaInicial = {
        ...loja,
        colunas: {
          ...loja.colunas,
          [newColuna.id]: newColuna,
        },
      };
      setLoja(newlistaInicial);
      setLista(listaItem(newlistaInicial));

      return;
    }

    const startItem = Array.from(start.itensId);

    startItem.splice(source.index, 1);


    const newStart = {
      ...start,
      itensId: startItem,
    };
    const finishItem = Array.from(finish.itensId);
    finishItem.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      itensId: finishItem,
    };


    const newlistaInicial = {
      ...loja,
      colunas: {
        ...loja.colunas,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    };
   
    setLoja(newlistaInicial);

    setLista(listaItem(newlistaInicial))

    
    console.log(jogadores[0].Shop.itens[draggableId].preço)
    if(col=="coluna-2"){
      somaMoeda=moeda-jogadores[0].Shop.itens[draggableId].preço
    }else{
      somaMoeda=moeda+jogadores[0].Shop.itens[draggableId].preço
    }
   
    setMoeda(somaMoeda)
    console.log(somaMoeda)
  };

  function listaItem(e) {
    var shop;
    var moe;
  if(contador==0){
    moe=e[0].moeda;
    setContador(5)
  }else{
    moe=moeda;
  }

    if (e[0] != undefined) {
      shop = e[0].Shop;
    } else {
      shop = e;
    }
    console.log(shop)
    return shop.colunaOrdenacao.map(colunaId => {
      const coluna = shop.colunas[colunaId];
      const itens = coluna.itensId.map(itemId => shop.itens[itemId]);
      return <Coluna key={coluna.id} coluna={coluna} itens={itens} moeda={moe} />;
    }

    )

  }


  function DadosIni(e) {

    setLoja(e[0].Shop)

  }
  const retorna = () => {

    let Filtrado = jso[0].filter(jog => jog.id == params.id);
    setJogadores(Filtrado);
    
    DadosIni(Filtrado);
    setMoeda(Filtrado[0].moeda)
    setLista(listaItem(Filtrado));
    

  }
  function divis() {
    return <div>  {jogadores.map(jog => {
      return <div key={jog.id}>
        Loja do :{" " + jog.name}
        <br></br>
        Moedas: {moeda}

      </div>
    })

    }

    </div>
  }


  return (
    <div>
      <Button onClick={retorna}>Mostrar</Button>
      {() => {
        let Filtrado = jso[0].filter(jog => jog.id == params.id);
        setJogadores(Filtrado);

      }}
      {divis()}


      <DragDropContext
        onDragEnd={handleOnDragEnd}
        onDragStart={handleOnDragStart}
        onDragUpdate={handleOnDragUpdate}>
        <Container>
          {lista}

        </Container>
      </DragDropContext>

    
       <Button onClick={() => {

props.att({
  id: jogadores[0].id,
  name: jogadores[0].name,
  level: jogadores[0].level,
  moeda: moeda,
  Shop: loja
},



)
navigate('/')
}}>Atualizar</Button>
     <footer> <a target="_blank" href="https://icons8.com/icon/54390/pilha-de-dinheiro">Pilha de dinheiro icon by Icons8</a></footer>
    </div>

  );
}


export default Shop;

