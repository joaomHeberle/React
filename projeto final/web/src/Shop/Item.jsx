import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';
import dinheiro from '../imagem/icons8-pilha-de-dinheiro-96.png'
const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  background-color: ${props => (props.isDragging ? 'lightgreen' : 'white',props.isDragDisabled
  ? 'lightgrey'
  : props.isDragging
    ? 'lightgreen'
    : 'white')};
  display: flex;
  
`;
const Handle = styled.div`
width: 20px;
height: 20px;
background-size: contain;
background-image: url(${dinheiro}) ;
border-radius: 4px;
margin-right: 8px;
`;


export default class Item extends React.Component {
  render() {
const moeda= this.props.moeda;
const isDragDisabled = moeda<this.props.item.preço;
    return (
      <Draggable draggableId={this.props.item.id} isDragDisabled={isDragDisabled} index={this.props.index}>
        {(provided, snapshot) => (
          <Container
            {...provided.draggableProps}
           
            ref={provided.innerRef}
            isDragging={snapshot.isDragging}
            isDragDisabled={isDragDisabled}
          > <Handle  {...provided.dragHandleProps}/>
     
            {this.props.item.conteudo}  {this.props.item.preço}
          </Container>
        )}
      </Draggable>
    );
  }
}