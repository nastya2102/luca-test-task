import React from 'react';
import styled from 'styled-components';
import PenIcon from '../../access/svg/pen'


const Pen = ({small, onClick, icon, children, btnBlue}) => {
  return (
    <StyledContainer>
      <PenContainer btnBlue={btnBlue} onClick={onClick}>
        <PenIcon />
      </PenContainer>
    </StyledContainer>
  )
};

const StyledContainer = styled.div`
  position: absolute;
  bottom: 102px;
  right: 16px;
  flex-direction: column;
  display: flex;
  align-items: flex-end;
`;


const PenContainer = styled.div`
  cursor: pointer;
  width: 56px;
  height: 56px;
  background: #3843D0;
  box-shadow: 0px 2px 0px #212B80;
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
`;

export default Pen;