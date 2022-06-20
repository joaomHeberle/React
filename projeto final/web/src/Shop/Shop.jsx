import { useState, useEffect } from 'react';
import DadosIniciais from './DadosIniciais';
import Coluna from './Coluna';
import styled from 'styled-components';
import { useParams, useNavigate } from 'react-router-dom'
import { DragDropContext } from 'react-beautiful-dnd';


function Shop(props) {
  const [jogadores, setJogadores] = useState([]);
  const jso = [props.lista];
  const moeda =props.moeda;
  const [loja,setLoja]=useState([]);
//inventBanco=props.inventario;
   // const [listaInicial,setListaInicial] = useState(DadosIniciais);
    const [lista,setLista] = useState('');

    const [preco,setPreco]=useState([loja]);
    const itemArray = [loja]
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
    const Container = styled.div`
    display: flex;

  `;
      const handleOnDragEnd = result=>{
        document.body.style.color = 'inherit';
        document.body.style.backgroundColor = 'inherit';
        
        const { destination, source, draggableId } = result;

        
    /*   const retPreco=preco.map((preco)=>{
         return preco.itens[draggableId].preço
        }) */
const retPreco=1;

    
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
      
        return;
      }
const ok=true;
      if(ok){               
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
    
      if(destination.droppableId==='coluna-2'){

        console.log(itemArray.map(ver=>ver.itens['item-1']))
  
     if(itemArray[0].itens['item-1'].id.match(finishItem.toString()))
     {
      console.log("entrou tem o 1")
     }
    if(itemArray[0].itens['item-2'].id.indexOf(finishItem.toString())>-1){
      console.log("entrou tem o 2")
     }


      console.log(loja)
      atu(loja)
      }
      if(destination.droppableId==='coluna-1'){
        console.log("voltou para 1")
      }
    }else{
      alert("voce não tem moedas suficientas faltam "+(retPreco-moeda)+" moedas")
    }
      };
  
    function listaItem(e){
  
      return e[0].Shop.colunaOrdenacao.map(colunaId=>{
        const coluna = e[0].Shop.colunas[colunaId];
          const itens = coluna.itensId.map(itemId => e[0].Shop.itens[itemId]);
                       return <Coluna key={coluna.id} coluna={coluna} itens={itens} moeda={moeda}/>;
      }
      
      )
      
    }
  
    function DadosIni(e){
   
      setLoja(e[0].Shop)
 
    }
    const retorna = () => {

      let Filtrado = jso[0].filter(jog => jog.id == params.id);
      setJogadores(Filtrado);
      console.log(Filtrado[0].name)
      DadosIni(Filtrado);
      setLista(listaItem(Filtrado));
   

  }
  function atu(e){
console.log(jogadores)
console.log(e)
     props.att( {
      id:jogadores[0].id,
      name:jogadores[0].name,
      level:jogadores[0].level,
      Shop:e
    }) 
  }
    useEffect(() => {
    

       
   
     
    
    },[])
   
        return (
            <div>
              <button onClick={retorna}>mostrar</button>
              {() => {
                    let Filtrado = jso[0].filter(jog => jog.id == params.id);
                    setJogadores(Filtrado);

                }}{jogadores.map(jog => {
                    return <div>
                      Loja do :{" " + jog.name}
                        <br></br>
                

                    </div>
                })}
             {console.log(jogadores)}
            <DragDropContext 
            onDragEnd={handleOnDragEnd}
            onDragStart={handleOnDragStart}
            onDragUpdate={handleOnDragUpdate}>
   <Container>
            {lista}
     
            </Container>
          </DragDropContext>
      <button onClick={()=>{
  
        props.att( {
          id:jogadores[0].id,
          name:jogadores[0].name,
          level:jogadores[0].level,
          Shop:loja
        }
             


        )
      }}>Atualizar</button>
          </div>

        );
    }

 
export default Shop;

