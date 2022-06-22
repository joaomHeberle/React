import styled from 'styled-components';

const Button= styled.button`border-color: #3498db;
  color: #fff;
  box-shadow: 0 0 40px 40px #3498db inset, 0 0 0 0 #3498db;
  -webkit-transition: all 150ms ease-in-out;
  transition: all 150ms ease-in-out;
  border-radius: 10px;
  margin:5px;
  
  
  &:hover {
    box-shadow: 0 0 10px 0 #c6e981 inset, 0 0 10px 4px #c6e981;
    color:black;
  }
  `;

  export default Button;