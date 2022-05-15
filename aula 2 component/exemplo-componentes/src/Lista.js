import React from 'react'

//Componente classe sem props
// class Lista extends React.Component {
//     render(){
//         return(
//             <div>
//                 <h3>Lista 1</h3>
//                 <ul>
//                     <li>Elemento 1</li>
//                     <li>Elemento 2</li>
//                     <li>Elemento 3</li>
//                     <li>Elemento 4</li>
//                     <li>Elemento 5</li>
//                 </ul>
//             </div>
//         )
//     }
// }

//Componente classe com props
// class Lista extends React.Component {
//     render(){
//         return(
//             <div>
//                 <h3>{this.props.titulo}</h3>
//                 <ul>
//                     {this.props.elementos ?
//                     this.props.elementos.map(elemento => <li>{elemento}</li>)
//                     : <li>Lista Vazia</li>}
//                 </ul>
//             </div>
//         )
//     }
// }

//Componente funcional com props
const Lista = (props) => {
    return (
        <div>
            <h3>{props.titulo}</h3>
            <ul>
                {props.elementos ?
                props.elementos.map(elemento  => <li key={elemento}>{elemento}</li>)
                : <li>Lista Vazia</li>}
            </ul>             
        </div>
    )
}

export default Lista;