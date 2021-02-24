import React from 'react';
import styled from 'styled-components';

const NotFound =() => {
  return(<StyledContainer>Not Found</StyledContainer>)
};

const StyledContainer = styled.div`
  font-family: Inter;
   margin-top: 40px;
   display: flex;
   justify-content: center;
   align-items: center;
   font-size: 24px;
   color: #3943d0;
`;

export default NotFound