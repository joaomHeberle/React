import React from 'react';
import styled from 'styled-components';
import Item from './Item';
import { Droppable } from 'react-beautiful-dnd';

const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
  margin-left: auto;
  margin-right:auto;
  width:35%;
  display: flex;
  flex-direction: column;
`;
const Title = styled.h3`
  padding: 8px;
`;
const ItemList = styled.div`
padding: 8px;
transition: background-color 0.2s ease;
background-color: ${props => (props.isDraggingOver ? 'skyblue' : 'white')};
flex-grow: 1;
min-height: 100px;
`;

export default class Coluna extends React.Component {
    render() {
        return (
            <Container>
                <Title>{this.props.coluna.titulo}</Title>
                <Droppable droppableId={this.props.coluna.id}>
                    {(provided,snapshot) => (
                        <ItemList 
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        isDraggingOver={snapshot.isDraggingOver}
                        >

                            {this.props.itens.map((item, index) => (<Item key={item.id} moeda={this.props.moeda} item={item} index={index} />
                            ))}
                            {provided.placeholder}
                        </ItemList>
                    )}
                </Droppable>
             
            </Container>
    
        );
    
    }

}