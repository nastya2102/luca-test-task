import React from 'react';
import styled from 'styled-components';

const Button = ({small, onClick, icon, children, btnBlue}) => {
  return (
    <StyledButton btnBlue={btnBlue} onClick={onClick}>
      {children}
    </StyledButton>
  )
};


const StyledButton = styled.button`
  background-color: transparent;
  padding: 10px 8px 10px 12px;
  color: #c6c7d4;
  text-transform: uppercase;
  cursor: pointer;
  border: 3px solid #C6C7D4;
  box-sizing: border-box;
  box-shadow: 0px 2px 0px #C6C7D4;
  border-radius: 10px;   
  ${({btnBlue}) => btnBlue && `
    background: #3843D0;
    border: 3px solid #212B80;
    box-sizing: border-box;
    box-shadow: 0px 2px 0px #212B80;
    border-radius: 10px;
    color: white;
  `}
`;

export default Button;