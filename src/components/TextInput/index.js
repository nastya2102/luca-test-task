import React from 'react';
import styled from 'styled-components';

const TextInput = ({title, value, isSmall, name, handleChange, placeholder}) => {
  return (
    <div>
      <StyledLabel>{title}</StyledLabel>
      <StyledTextarea
        isSmall={isSmall}
        name={name}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}/>
    </div>
  )
};


const StyledTextarea = styled.textarea`
  width: 100%;
  max-width: 100%;
  min-width: 100%;
  max-height: 192px;
  min-height: 192px;
  height: 192px;
  background: #FFFFFF;
  border: 2px solid rgba(38, 38, 38, 0.25);
  box-sizing: border-box;
  border-radius: 12px;
  padding: 15px 16px;
  &::placeholder {
    color: #C0C0C0;
  }

  ${({isSmall}) => isSmall && `
    max-height: 48px;
    min-height: 48px;
    height: 48px;
    white-space: pre;
    overflow: hidden;
    overflow-wrap: normal;
  `};
`;

const StyledLabel = styled.div`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
  margin-bottom: 8px;
  color: #565656;
`;

export default TextInput;